async function getStrapiData(url: string) {
  const baseUrl = "http://localhost:1337";
  try {
    // const response = await fetch(baseUrl + url);
    const response = await fetch("http://localhost:1337/api/home-page");

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default async function Home() {
  const strapiData = await getStrapiData("/api/home-page");
  console.log("data:", strapiData.data);

  const { Title, Description } = strapiData.data.attributes;

  return (
    <main className="container mx-auto py-6">
      <h1 className="text-5xl font-bold">{Title}</h1>
      <p className="text-xl mt-4">{Description}</p>
    </main>
  );
}
