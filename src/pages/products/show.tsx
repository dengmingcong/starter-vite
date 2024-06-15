import { useOne } from "@refinedev/core";

export const ShowProduct = () => {
    const { data, isLoading } = useOne({ resource: "products", id: 123 });

    if (isLoading) {
        return <div>Loading</div>;
    }

    console.log(data);
    return <div>Product name: {data?.data.name}</div>;
}