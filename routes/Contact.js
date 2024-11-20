//1-require express
const express = require ("express");
const Contact = require("../models/Contact");

//2- express router 

const router = express.Router();

//Test router
router.get('/test',(req, res) =>
    {res.send ("Hello world");

    }
    
);
//get add
router.post('/add' , async (req ,res) => {
try {
    const {name,email,Number} =req.body;
    const newContact = new Contact({name,email,Number});
    await newContact.save();
    res.status(200).send({msg : 'Contact add successfully ...' , newContact});
} catch (error) {
    res.status(400).send({msg:"can not find"})
}

});
//get all contact 
router.get('/getall', async (req,res)=>{
try {
    const listenContacts = await Contact.find()
    res.status(200).send({msg:"This is the list of all contacts", listenContacts})
} catch (error) {
    res.status(400).send({msg:"can not add contact!!",error});
}}
)
//get one contact 
router.get("/:id", async (req, res) => {
	try {
		const contactToGet = await Contact.findOne({ _id: req.params.id });
		res.status(200).send({ msg: "This is the  contacts ", contactToGet });
	} catch (error) {
		res.status(400).send({ msg: "Can not get the contact !!", error });
	}
});
//delete contact
router.delete("/:_id", async (req, res) => {
	try {
		const { _id } = req.params;
		await Contact.findOneAndDelete({ _id });
		res.status(200).send({ msg: "Contact deleted ..." });
	} catch (error) {
		res.status(400).send({ msg: "Can not delete the contact !!", error });
	}
});

//edit contact
router.put("/:_id", async (req, res) => {
	try {
		const { _id } = req.params;
		const result = await Contact.updateOne({ _id }, { $set: { ...req.body } });
		res.status(200).send({ msg: "Contact updated ..." });
	} catch (error) {
		res.status(400).send({ msg: "Can not edit the contact !!", error });
	}
});


//export
module.exports = router;