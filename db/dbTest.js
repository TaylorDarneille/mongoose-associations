const BlogPost = require('../models/BlogPost')
const Product = require('../models/Product')
const Order = require('../models/Order')

// --> EXAMPLE OF EMBEDDED SUB DOCUMENTS (One-to-Many)
// // Create a blog post using the model
// const post = new BlogPost({ title: "Cat", body: "Yeehaw! Sandos!" })

// // Create a comment by pushing a comment object
// post.comments.push({ header: 'My comment', content: "What!?"  })

// // Save the parent after pushing the child into the parent's array
// post.save(err => {
//     if (!err) console.log('Success!');
// })

// --> ACCESSING AND REMOVING AN EMBEDDED SUBDOCUMENT
// let postId = '603030ce47da13ea91103747'
// let commentId = '603030ce47da13ea91103748'
// BlogPost.findById(postId, (err, foundPost) => {
//     if (!err) {
//         foundPost.comments.id(commentId).remove()
//         foundPost.save(err => {
//             // do something
//             if(!err) console.log('succes!')
//         })
//     }
// })

// --> EXAMPLE OF OBJECT REF
// const product = new Product({name: 'Wrench', price: 5})
// product.save()
// const order = new Order()
// order.products.push(product)
// order.save()


let orderId = '603035d310b2bfeafe697c55'
Order.findById(orderId).populate('products').exec((err, foundOrder) => {
    console.log(foundOrder);
})