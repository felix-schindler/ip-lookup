// @deno-types="npm:@types/geoip-lite@1.4.4"
import { lookup } from "geoip-lite";

Deno.serve((_req: Request, connInfo: Deno.ServeHandlerInfo) => {
	const ip = connInfo.remoteAddr.hostname;
	const info = lookup(ip);

	return Response.json({
		ip,
		info,
	});
});
