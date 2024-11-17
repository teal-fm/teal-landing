import { Client, createClient } from "@libsql/client";

export async function onRequestPost(context, env) {
  const turso = createClient({
    url: env.TURSO_DATABASE_URL!,
    authToken: env.TURSO_AUTH_TOKEN,
  });
  return await submitHandler(context, turso);
}

async function submitHandler(context, turso: Client) {
  const body = await context.request.formData();

  const { email } = Object.fromEntries(body);

  await turso.execute({
    sql: "INSERT INTO newsletter (email) VALUES ($1)",
    args: [email],
  });

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ success: true }),
  };
}
