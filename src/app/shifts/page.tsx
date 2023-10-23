import dbConnect from "@/server/data/dbConnect";

async function getData() {
  await dbConnect();
}

async function Page() {
  await getData();
  return <div>Shifts</div>;
}

export default Page;
