import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {

  // eslint-disable-next-line quotes
  const token = req.cookies.get('auth');
  const url = req.nextUrl.pathname;
  const url2 = req.url;

  console.log("url", url);
  console.log("url2", url2);

  if (url.includes("inicio") || url.includes("transferencias") || url.includes("perfil") || url.includes("actividad") || url.includes("agregar-tarjeta") || url.includes("cargar-dinero") || url.includes("depositos") || url.includes("listar-servicios") || url.includes("listar-tarjetas")) {
    if (!token) {
      return NextResponse.redirect(`${process.env.URL_PAGE}iniciar-sesion/paso-1`);
    }
  }
  if (url2 === `${process.env.URL_PAGE}`) {
    if (token) {
      return NextResponse.redirect(`${process.env.URL_PAGE}inicio`);
    }
  }
  if (url.includes("registro-exitoso")) {
    if (token) {
      return NextResponse.redirect(`${process.env.URL_PAGE}inicio`);
    }
  }
}