// @deno-types="npm:@types/geoip-lite@1.4.4"
import { lookup } from "geoip-lite";

Deno.serve((req: Request, connInfo: Deno.ServeHandlerInfo) => {
	let ip: string;

	if (req.headers.has("Fly-Client-IP")) {
		ip = req.headers.get("Fly-Client-IP")!;
	} else {
		ip = connInfo.remoteAddr.hostname;
	}

	return Response.json({
		ip,
		info: lookup(ip),
	});
});
