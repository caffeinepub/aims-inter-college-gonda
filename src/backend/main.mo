import Text "mo:core/Text";
import Order "mo:core/Order";

actor {
  public type SchoolInfo = {
    name : Text;
    address : Text;
    phone : Text;
    website : Text;
    principal : Text;
    about : Text;
  };

  public type Contact = {
    name : Text;
    position : Text;
    email : Text;
    phone : Text;
  };

  module Contact {
    public func compareByName(contact1 : Contact, contact2 : Contact) : Order.Order {
      Text.compare(contact1.name, contact2.name);
    };
  };

  var schoolInfo : SchoolInfo = {
    name = "AIMS Inter College Gonda";
    address = "Civil Lines Behind Numaish Ground, Gonda - 271001";
    phone = "9120300444";
    website = "http://aimintercollege.com";
    principal = "Ashkarnath";
    about = "AIMS Inter College is a reputed school located in Gonda top civil lines "; 
  };

  var contacts : [Contact] = [
    {
      name = "Zeyauddin Siddiqui";
      position = "Support Staff";
      email = "zeyauddinsiddiqi@gmail.com";
      phone = "9580088248";
    },
    {
      name = "Abhay Kumar";
      position = "Owner";
      email = "abhay4094@gmail.com";
      phone = "9120300444";
    },
  ];

  public query ({ caller }) func getSchoolInfo() : async SchoolInfo {
    schoolInfo;
  };

  public query ({ caller }) func getContacts() : async [Contact] {
    contacts.sort(Contact.compareByName);
  };
};
