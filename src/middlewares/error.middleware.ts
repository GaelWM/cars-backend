import Winston from "winston";

export default function (err: any, req: any, res: any, next: any): void {
  Winston.log("error", `${err}`);
  res.status(500).send("Something failed");
}
