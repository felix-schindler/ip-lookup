// @deno-types="npm:@types/geoip-lite@1.4.4"
import { lookup } from "geoip-lite";

const HEADER_X_FORWARDED_FOR = "X-Forwarded-For";

Deno.serve((req: Request, connInfo: Deno.ServeHandlerInfo) => {
	let ip: string;

	if (req.headers.has(HEADER_X_FORWARDED_FOR)) {
		ip = req.headers.get(HEADER_X_FORWARDED_FOR)!;
	} else {
		ip = connInfo.remoteAddr.hostname;
	}

	return Response.json({
		ip,
		info: lookup(ip),
	});
});
