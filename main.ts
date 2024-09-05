// @deno-types="npm:@types/geoip-lite@1.4.4"
import { lookup } from "geoip-lite";

Deno.serve((_: Request, connInfo: Deno.ServeHandlerInfo) => {
	const ip = connInfo.remoteAddr.hostname;

	return Response.json({
		ip,
		info: lookup(ip),
	});
});
