import mongoose from "mongoose";
// Function for Creating Connection to Database
const connectDB = async () => {
	try {
        mongoose.set('strictQuery', true);
		await mongoose.connect(process.env.MONGO_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log(`MongoDB Connected Successfully!`);
	} catch (err) {
		console.log(err.message);
	}
};

export default connectDB;