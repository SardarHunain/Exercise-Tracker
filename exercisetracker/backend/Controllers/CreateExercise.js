import CreateExerciseModel from "../Models/CreateExercise.js";

export const getData = async(req, res)=>{
    try{
        const UsersData = await CreateExerciseModel.find();
        res.json(UsersData)
    }
    catch(error){
        console.log("data not found");
    }
}

export const CreateExercise = async(req, res)=>{
    console.log("post request reached ");
    
    const UserName = req.body.UserName;
    const UserNameInStringFormat = UserName.toString();

    const Description = req.body.Description;
    const DescriptionInStringFormat = Description.toString();

    const Duration = req.body.Duration;
    const DurationInNumericFormat = Number(Duration);

    //console.log(UserNameInStringFormat);

    const newUser = new CreateExerciseModel({
        UserName: UserNameInStringFormat,
        Description: DescriptionInStringFormat,
        Duration: DurationInNumericFormat
    })

    try{
        await newUser.save();
        res.json(newUser)
    }
    catch(error){
        console.log("error in saving.......")
    }
}