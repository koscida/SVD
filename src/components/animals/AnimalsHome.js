import Table from "../shared/react-table/Table";
import { animals, animalProducts } from "../shared/data/dataAnimals";

const animalProductsMap = animalProducts.reduce((products, product) => {
	products[product.name] = product;
	return products;
}, {});
const allProducts = animals.reduce((products, product) => {
	const newProduct = { ...product };
	if (product.products.regular) {
		newProduct.products.regular = {
			...product.products.regular,
			...animalProductsMap[product.products.regular.name],
		};
	}
	if (product.products.deluxe) {
		newProduct.products.deluxe = {
			...product.products.regudeluxelar,
			...animalProductsMap[product.products.deluxe.name],
		};
	}
	products.push(newProduct);
	return products;
}, []);
console.log("allProducts", allProducts);
const tableData = allProducts.reduce((products, product) => {
	const newProduct = {};
	newProduct.anmial = product.animal;
	products.push(newProduct);
	return products;
}, []);
console.log("tableData", tableData);

const columnData = [
	{
		Header: "Animal Info",
		columns: [
			{
				Header: "Animal",
				accessor: "animal",
			},
		],
	},
];
function AnimalsHome() {
	return (
		<div>
			<Table columns={columnData} data={tableData} />
		</div>
	);
}

export default AnimalsHome;
