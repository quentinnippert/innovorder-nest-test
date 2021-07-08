//_____Controller_____//
import { User, UserDocument } from './../schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

//_____Common_____//
import { Injectable } from '@nestjs/common';

//_____Security_____//
var bcrypt = require('bcrypt');

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}


  async findOne(username: string): Promise<User | undefined> {
    try {
      return this.userModel.findOne({ username: username });
    } catch (err) {
      throw new Error("There was a problem during login, please fill in all required fields. If you don't have an account, please create one.");
    };
  };


  async createOne(username: string, email: string, password: string) {

    const cost = 10;
    const hash = bcrypt.hashSync(password, cost);

    let userNameFound = await this.findOne(username);
    let emailFound = await this.userModel.findOne({email : email});

    if(userNameFound) {
      return {
        result: false,
        message: 'This username is already used.'
      }
    } else if (emailFound) {
      return {
        result: false,
        message: 'This email is already used.'
      }
    } else if (!userNameFound && !emailFound) {
      try {
        let newUser = new this.userModel({
          username: username,
          email: email,
          password: hash
        });
        let userSave = newUser.save();
        return userSave;
      } catch (err) {
        throw new Error('There was a problem creating your account.');
      }
    }
  };

  
  async updateOne(username: string, email: string, password: string) {

    const cost = 10;
    const hash = bcrypt.hashSync(password, cost);

    try {
      let updateUser = await this.userModel.updateOne(
        { username: username },
        {
          username: username,
          email: email,
          password: hash
        }
      );
      return { result: true }
    } catch (err) {
      throw new Error('There was a problem editing your data.');
    };
  };

}