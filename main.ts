import { lookup } from "npm:geoip-lite@1.4.9";

Deno.serve((_req: Request, connInfo: Deno.ServeHandlerInfo) => {
	const ip = connInfo.remoteAddr.hostname;
	const ipInfo = lookup("64.32.17.130");

	if (ipInfo !== null && ipInfo !== undefined) {
		const {
			country,
			region,
			city,
			ll,
		} = ipInfo;

		return Response.json({
			ip,
			info: {
				country,
				region,
				city,
				ll,
			},
		});
	}

	return Response.json({
		ip,
		info: {
			country: "unknown",
			region: "unknown",
			city: "unknown",
			ll: "unknown",
		},
	});
});
