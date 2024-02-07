// import { lookup } from "npm:geoip-lite@1.4.9";

Deno.serve((req: Request, connInfo) => {
    try {
        return Response.json(connInfo.remoteAddr);
    } catch (e) {
        return Response.json({
            msg: `${e}`,
        }, { status: 500 });
    }
});
