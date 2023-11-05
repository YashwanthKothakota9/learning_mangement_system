import prisma from "@/lib/db";
import { Categories } from "./_components/categories";

const SearchPage = async () => {
  const categories = await prisma.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return (
    <div className="p-6">
      <Categories items={categories} />
    </div>
  );
};

export default SearchPage;
