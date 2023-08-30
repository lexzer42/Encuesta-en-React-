![164shots_so](https://github.com/lexzer42/Encuesta-en-React-/assets/134535937/f07bfa5f-d3ac-480f-a9ae-0d78f2e0ec23)


Desafío: Desarrollo de una encuesta en React con preguntas y valoraciones
Descripción: 
Debes crear una aplicación web que permita a los usuarios responder una encuesta con preguntas y valoraciones del 1 al 5. El listado de preguntas será cargado desde un JSON mockeado. La aplicación debe cumplir con los siguientes requisitos:
-	Mostrar una pregunta a la vez, con sus opciones de valoración del 1 al 5.
-	Permitir al usuario seleccionar una valoración para cada pregunta.
-	Mostrar la siguiente pregunta después de que el usuario haya respondido la actual
-	Al finalizar la encuesta, mostrar un resumen con las respuestas del usuario.
-	Requisitos técnicos:
-	Utiliza react para construir la aplicación.
-	Para el CSS utilizar algún framework como Boostrap o Material-UI.
Entrega:
Una vez completado, puedes compartir tu solución proporcionando el código fuente en un repositorio GitHub u otra plataforma de alojamiento de código. Asegúrate de incluir instrucciones claras sobre como ejecutar y probar la aplicación
¡Buena Suerte en el desafío!

## Ejemplo de JSON
```json
{
  "preguntas": [
    {
      "id": 1,
      "texto": "¿Qué tan satisfecho estás con el producto?",
      "valoracion": 5
    },
    {
      "id": 2,
      "texto": "¿Cuál es tu opinión sobre el servicio al cliente?",
      "valoracion": 5
    },
    {
      "id": 3,
      "texto": "¿Cómo calificarías la usabilidad del sitio web?",
      "valoracion": 5
    },
    {
      "id": 4,
      "texto": "¿Recomendarías nuestro producto a otros?",
      "valoracion": 5
    },
    {
      "id": 5,
      "texto": "¿Cómo evaluarías la calidad del producto?",
      "valoracion": 5
    }
  ]
}
```


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
