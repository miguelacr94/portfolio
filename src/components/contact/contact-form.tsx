"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as yup from "yup";
import Button from "../shared/button";
import Input from "../shared/input";
import TextArea from "../shared/text-area";

interface ContactForm {
  name: string;
  email: string;
  comment: string;
}

const ContactSchema = yup.object().shape({
  name: yup.string().required("Por favor ingresa un nombre completo."),
  email: yup
    .string()
    .email("Ingresa un correo electrónico válido.")
    .required("Por favor ingresa un correo electrónico."),
  comment: yup.string().required("Por favor escribe un comentario interno."),
});

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ContactSchema),
  });

  const onSubmit = (data: ContactForm) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log(data);
      toast.success("Envío exitoso");
      setValue("name", "");
      setValue("email", "");
      setValue("comment", "");
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset disabled={isLoading} style={{ border: "none" }}>
        <Input
          label="Nombre completo"
          placeholder="Ejemplo: Juan Pérez"
          error={errors.name?.message}
          {...register("name")}
          type="text"
          onChange={(e) => setValue("name", e.target.value)}
          value={getValues("name")}
        />
        <Input
          label="Correo electrónico"
          placeholder="Ejemplo: juan@correo.com"
          error={errors.email?.message}
          {...register("email")}
          type="email"
          onChange={(e) => setValue("email", e.target.value)}
          value={getValues("email")}
        />
        <TextArea
          label="Comentario"
          placeholder="Escribe tu comentario aquí"
          error={errors.comment?.message}
          {...register("comment")}
          onChange={(e) => setValue("comment", e)}
          value={watch("comment")}
        />
        <Button
          disabled={isLoading}
          text="Enviar"
          onClick={() => {}}
          type="submit"
        />
      </fieldset>
    </form>
  );
};

export default ContactForm;
