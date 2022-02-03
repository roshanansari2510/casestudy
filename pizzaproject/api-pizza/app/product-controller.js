const db=require('../db/models');

const Product=db.Product;

exports.findAll=(req,resp)=>{

    Product.findAll()

    .then(data=>resp.json(data))

    .catch(err=>{

        resp.status(500)

        .send({message:err.message || `Something went wrong`})

    })

};
exports.findByPk=(req,resp)=>{

    const id=parseInt(req.params.id);

    Product.findByPk(id)

    .then(data=>resp.json(data))

    .catch(err=>{

        resp.status(500)

        .send({message:err.message || `Something went wrong` })

    })

};
// // //4. update

// exports.updateProduct=(req,resp)=>{

//     const u_id=parseInt(req.params.id);

//     Product.update(req.body,{where:{id:u_id}})

//     .then(num=>{

//         if(num==1){

//             resp.send({message:`Product with id ${id} is updates successfully.`});

//         }else{

//             resp.send({message:`Cannot update Product with id=${id}. may be Product not found or req.body is empty`});

//         }

//     })

//     .catch((err)=>{

//         resp.status(500)

//         .send({message:err.message || "some error while updating data"})

//     })

// };
// // //5. delete

exports.deleteProduct=(req,resp)=>{

    const u_id =parseInt(req.body.params);

    Product.destroy({where:{id:u_id}})

    .then(num =>{

        if(num==1){

            resp.send({message:`Product with id ${id} is deleted successfully.`});

        }else{

            resp.send({message:`Cannot delete Product with id=${id}.May be Product not found`});

        }

    }



    )

    .catch((err)=>{

        resp.status(500)

        .send({message:err.message || "Could not delete Product with id=" +id})

    })

};
// exports.createProduct=(req,resp)=>{

//     if(!req.body.ProductName){

//         resp.status(400)

//         .send({message:"Product name must be provided"});

//     }

//     if(!req.body.ProductEmail){

//         resp.status(500)

//         .send({message:"Email name must be provided"});

//     }

//     if(!req.body.Phone){

//         resp.status(400)

//         .send({message:"Phone number must be provided"});

//     }

//     if(!req.body.password){

//         resp.status(500)

//         .send({message:"password must be provided"});

//     }
//     const newProduct={

//         ProductName:req.body.ProductName,

//         ProductEmail:req.body.ProductEmail,

//         Phone:req.body.Phone,

//         password:req.body.password,

//         createdAt:req.body.createdAt,

//         updatedAt:req.body.updatedAt

//     }



//     Product.create(newProduct)

//     .then(data=>{resp.send(data);})

//     .catch(err=>{

//         resp.status(500)

//         .send({message:err.message})

//     })

// };