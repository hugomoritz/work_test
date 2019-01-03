import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";

//Database collection Info
export const Info = new Mongo.Collection("info");

/*
Method defined, inserting data to the collection. Also possible to update
information for a service.
*/
Meteor.methods({
  "info.insert"(service, user, password) {
    check(service, String);
    check(user, String);
    check(password, String);
    Info.update(
      { service: service },
      {
        service,
        user,
        password,
        createdAt: new Date()
      },
      { upsert: true }
    );
  }
});
