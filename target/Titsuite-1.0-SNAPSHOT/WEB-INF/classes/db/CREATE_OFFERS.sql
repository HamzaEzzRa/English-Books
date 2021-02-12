create table offers(
                       ID  int  DEFAULT seq_offers.nextval PRIMARY KEY ,
                       description varchar(500),
                       city varchar(15),
                       minimumWage int,
                       status varchar(10),
                       refCustomer int  NOT NULL,
                        startDay DATE,
                       FOREIGN KEY(refCustomer) REFERENCES CUSTOMER(ID)
);