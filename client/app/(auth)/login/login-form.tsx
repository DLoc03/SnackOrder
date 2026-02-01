"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import Link from "next/link";
import authApiRequest from "@/apiRequest/auth";
import { useRouter } from "next/navigation";
import { PATHSNAME } from "@/constants/paths-name";
import { handleErrorApi } from "@/lib/utils";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(100),
});

export function LoginForm() {
  const [loading, setLoading] = React.useState(false);

  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    if (loading) return;
    setLoading(true);
    try {
      const result = await authApiRequest.login(data);
      toast.success(result.payload.message, {
        position: "bottom-right",
      });
      await authApiRequest.auth({
        sessionToken: result.payload.data.token,
      });
      router.push(PATHSNAME.ME);
    } catch (err: any) {
      handleErrorApi({ error: err, setError: form.setError });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="w-full min-w-sm sm:max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">Đăng nhập</CardTitle>
      </CardHeader>
      <CardContent>
        <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="input-required">Email</FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-email"
                    aria-invalid={fieldState.invalid}
                    placeholder="Email"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="input-required">Mật khẩu</FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-password"
                    aria-invalid={fieldState.invalid}
                    placeholder="Nhập mật khẩu"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="vertical">
          <Button type="submit" form="form-rhf-demo" disabled={loading}>
            Đăng nhập
          </Button>
          <FieldDescription>
            Chưa có tài khoản?{" "}
            <Link href={"/register"} className="font-bold cursor-pointer ">
              Đăng ký
            </Link>
          </FieldDescription>
        </Field>
      </CardFooter>
    </Card>
  );
}
