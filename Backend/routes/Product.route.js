const express = require("express")
const { ProductModel } = require("../models/Product.model")
const productRoutes = express.Router()


var getData =async () => {
    try{
        let data =ProductModel.find()
        // console.log("data =>",data)
        return data
    }catch(err){
        console.log("ERROR")
    }
}

productRoutes.get("/", async (req, res) => {

    try {
          let product = await  getData()
        //   console.log("product => ",product)
        // res.send(product)
        // let page = Number(req.query.page) || 1
        // let limit = Number(req.query.limit) || Number(product.length)
        // let sort = req.query.sort ||  "rating"
        // let category = req.query.category || "All"
        // let skip = (page - 1) * limit
        // const search = req.query.q
        // const queryObj = {}
        // let categoryOption = [
        //     "Airdopes True Wireless",
        //     "Rockerz Wireless",
        //     "Smart Watches",
        //     "Bassheads Wired",
        //     "Stone Speakers",
        //     "Aavante Home Audio",
        //     "Mobile Accessories",
        //     "Trebel for Women",
        //     "Limited Edition",
        //     "Misfit Trimmers",
        //     "Immortal Gaming",
        // ]
        // category === "All"
        // ?(category = [...categoryOption]):
        // (category=req.query.category.split(","))
        // req.query.sort?(sort = req.query.sort.split(",")):(sort = [sort])

        // let sortBy={}

        // if(sort[1]){
        //     sortBy[sort[0]]=sort[1]
        // }else{
        //     sortBy[sort[0]]="asc";
        // }

        // if (search) {
        //     queryObj.name = { $regex: search, $options: "i" }
        // }
        // // console.log(queryObj.name)
        // let productsItem = await ProductModel.find(queryObj)
        // .where("category")
        // .in([...category])
        // .sort(sortBy)
        // .skip(skip)
        // .limit(limit)

        // // const total = await ProductModel.countDocuments({
        // //     category:{$in:[...category]},
        // //     // queryObj.name :{ $regex: search, $options: "i" }
        // // })
        // const response = {
        //     error:false,
        //     page:page+1,
        //     limit,
        //     // category:categoryOption,
        //     productsItem
        // }
        // res.status(200).json(response)

    // const searchQuery = req.query.q;
    // const sortBy = req.query.sortBy;
    // const filterBy = req.query.filterBy;
    // const page = Number(req.query.page) || 1;
    // const limit = Number(req.query.limit) || product.length;

    // const startIndex = (page - 1) * limit;
    // const endIndex = page * limit;

    // const result = {};

    // const searchFilter = {
    //     $or: [
    //         { $name: { $regex: searchQuery, $options: 'i' } } 
    //     ]
    // };

    // const sortFilter = sortBy ? { [sortBy]: 1 } : {};

    // const filterFilter = filterBy ? JSON.parse(filterBy) : {};

    // if (endIndex < await ProductModel.countDocuments().exec()) {
    //     result.next = {
    //         page: page + 1,
    //         limit: limit
    //     };
    // }

    // if (startIndex > 0) {
    //     result.previous = {
    //         page: page - 1,
    //         limit: limit
    //     };
    // }

    // result.results = await ProductModel.find(searchFilter).sort(sortFilter).where(filterFilter).limit(limit).skip(startIndex).exec();

    // res.send(result);
        const page = parseInt(req.query.page) - 1 || 0;
		const limit = parseInt(req.query.limit) || product.length;
		const search = req.query.search || "";
		let sort = req.query.sort || "rating";
		let category = req.query.category || "All";

		  let categoryOption = [
            "Airdopes True Wireless",
            "Rockerz Wireless",
            "Smart Watches",
            "Bassheads Wired",
            "Stone Speakers",
            "Aavante Home Audio",
            "Mobile Accessories",
            "Trebel for Women",
            "Limited Edition",
            "Misfit Trimmers",
            "Immortal Gaming",
        ]
		category === "All"
			? (category = [...categoryOption])
			: (category = req.query.category.split(","));
		req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);

		let sortBy = {};
		if (sort[1]) {
			sortBy[sort[0]] = sort[1];
		} else {
			sortBy[sort[0]] = "asc";
		}

		const movies = await ProductModel.find({ name: { $regex: search, $options: "i" } })
			.where("category")
			.in([...category])
			.sort(sortBy)
			.skip(page * limit)
			.limit(limit);

		// const total = await ProductModel.countDocuments({
		// 	category: { $in: [...category] },
		// 	name: { $regex: search, $options: "i" },
		// });

		const response = {
			error: false,
			page: page + 1,
			limit,
			category: categoryOption,
			movies,
		};

		res.send(response);
    } catch (err) {
        res.send("Products Can't get from the Database")
    }
})

productRoutes.post("/post", async (req, res) => {
    const products = req.body
    console.log(products)
    try {
        // await UserModel.insertMany()
        let productsItem = new ProductModel(products)
        await productsItem.save()
        res.send("Product Added to the Database SuccessFully")
    } catch (err) {
        res.send("Product Can't add to the Database")
    }
})
productRoutes.post("/many", async (req, res) => {
    const products = req.body
    console.log(products)
    try {
        // await UserModel.insertMany()
        await ProductModel.insertMany(products)
        // await productsItem.save()
        res.send("Product Added to the Database SuccessFully")
    } catch (err) {
        res.send("Product Can't add to the Database")
    }
})
productRoutes.delete("/delete/:id", async (req, res) => {
    const id = req.params.id
    // console.log(id)
    try {
        // await UserModel.insertMany()
        await ProductModel.findByIdAndDelete({ "_id": id })
        res.send("Product Delete from the Database SuccessFully")
    } catch (err) {
        res.send("Product Can't Delete from the Database")
    }
})
productRoutes.patch("/update/:id", async (req, res) => {
    const products = req.body
    const id = req.params.id
    const productsItem = await ProductModel.findOne({ "_id": id })
    console.log("productsItem =>", productsItem)
    try {

        if (products.priority !== productsItem.priority && products.priority2 !== productsItem.priority2 && products.priority3 !== productsItem.priority3 && products.product_item__aspect_ratio_href !== productsItem.product_item__aspect_ratio_href
            && products.product_item__primary_image_src !== productsItem.product_item__primary_image_src && products.product_item__secondary_image_src !== productsItem.product_item__secondary_image_src
            && products.product_item_meta__title !== productsItem.product_item_meta__title && products.rating__stars !== productsItem.rating__stars
            && products.rating__caption !== productsItem.rating__caption && products.m_0 !== productsItem.m_0
            && products.price !== productsItem.price && products.price_2 !== productsItem.price_2
            && products.visually_hidden_3 !== productsItem.visually_hidden_3 && products.product_item__quick_buy_button_2 !== productsItem.product_item__quick_buy_button_2
            && products.visually_hidden_4 !== productsItem.visually_hidden_4 && products.ml_2 !== productsItem.ml_2) {
            await ProductModel.findByIdAndUpdate({ "_id": id }, products)

        } else {
            if (products.priority !== productsItem.priority) {
                await ProductModel.findByIdAndUpdate({ "_id": id }, { priority: products.priority })

            }

            if (products.priority2 !== productsItem.priority2) {
                await ProductModel.findByIdAndUpdate({ "_id": id }, { priority2: products.priority2 })

            }

            if (products.priority3 !== productsItem.priority3) {
                await ProductModel.findByIdAndUpdate({ "_id": id }, { priority3: products.priority3 })

            }

            if (products.product_item__aspect_ratio_href !== productsItem.product_item__aspect_ratio_href) {
                await ProductModel.findByIdAndUpdate({ "_id": id }, { product_item__aspect_ratio_href: products.product_item__aspect_ratio_href })

            }

            if (products.product_item__primary_image_src !== productsItem.product_item__primary_image_src) {
                await ProductModel.findByIdAndUpdate({ "_id": id }, { product_item__primary_image_src: products.product_item__primary_image_src })

            }
            if (products.product_item__secondary_image_src !== productsItem.product_item__secondary_image_src) {
                await ProductModel.findByIdAndUpdate({ "_id": id }, { product_item__secondary_image_src: products.product_item__secondary_image_src })

            }
            if (products.product_item_meta__title !== productsItem.product_item_meta__title) {
                await ProductModel.findByIdAndUpdate({ "_id": id }, { product_item_meta__title: products.product_item_meta__title })

            }
            if (products.rating__stars !== productsItem.rating__stars) {
                await ProductModel.findByIdAndUpdate({ "_id": id }, { rating__stars: products.rating__stars })

            }
            if (products.rating__caption !== productsItem.rating__caption) {
                await ProductModel.findByIdAndUpdate({ "_id": id }, { rating__caption: products.rating__caption })

            }
            if (products.m_0 !== productsItem.m_0) {
                await ProductModel.findByIdAndUpdate({ "_id": id }, { m_0: products.m_0 })

            }
            if (products.price !== productsItem.price) {
                await ProductModel.findByIdAndUpdate({ "_id": id }, { price: products.price })

            }
            if (products.price_2 !== productsItem.price_2) {
                await ProductModel.findByIdAndUpdate({ "_id": id }, { price_2: products.price_2 })

            }
            if (products.visually_hidden_3 !== productsItem.visually_hidden_3) {
                await ProductModel.findByIdAndUpdate({ "_id": id }, { visually_hidden_3: products.visually_hidden_3 })

            }
            if (products.product_item__quick_buy_button_2 !== productsItem.product_item__quick_buy_button_2) {
                await ProductModel.findByIdAndUpdate({ "_id": id }, { product_item__quick_buy_button_2: products.product_item__quick_buy_button_2 })

            }
            if (products.visually_hidden_4 !== productsItem.visually_hidden_4) {
                await ProductModel.findByIdAndUpdate({ "_id": id }, { visually_hidden_4: products.visually_hidden_4 })

            }
            if (products.ml_2 !== productsItem.ml_2) {
                await ProductModel.findByIdAndUpdate({ "_id": id }, { ml_2: products.ml_2 })

            }
        }
        res.send("Product Updated to the Database SuccessFully")
    } catch (err) {
        res.send("Product Can't update to the Database")
    }
})

module.exports = { productRoutes }
