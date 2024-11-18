import { FC, useEffect, useState } from "react";

interface Address {
  address: string;
  city: string;
  postalCode: string;
  state: string;
}

interface Company {
  address: Address;
  department: string;
  name: string;
  title: string;
}

interface UserInfo {
  id: number;
  image: string;
  username: string;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  bloodGroup: string;
  address: Address;
  company: Company;
  university: string;
}

const Profile: FC = () => {
  const [info, setInfo] = useState<UserInfo>();

  useEffect(() => {
    fetch("https://dummyjson.com/users/1")
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
      });
  }, []);

  return (
    <div className="container mx-auto min-h-[83vh] w-full max-w-5xl dark:text-white">
      <h1 className="text-4xl p-4 font-bold font-lora">Your Account</h1>
      <div className="font-karla grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-1 p-4">
        <img src={info?.image} alt="pp" className="text-center" />
        <table>
          <tbody>
            <tr>
              <td className="font-bold">Username</td>
              <td>Jeet@7</td>
            </tr>
            <tr>
              <td className="font-bold">First Name</td>
              <td>Jeet</td>
            </tr>
            <tr>
              <td className="font-bold">Last Name</td>
              <td>Sabhadiya</td>
            </tr>
            <tr>
              <td className="font-bold w-32">Maiden Name</td>
              <td>Bhupatbhai</td>
            </tr>
            <tr>
              <td className="font-bold">Email</td>
              <td>jeetsabhadiya387@gmail.com</td>
            </tr>
            <tr>
              <td className="font-bold">Phone</td>
              <td>8866560921</td>
            </tr>
            <tr>
              <td className="font-bold">University</td>
              <td>RK University</td>
            </tr>
            <tr>
              <td className="font-bold">Age</td>
              <td>20</td>
            </tr>
            <tr>
              <td className="font-bold">Gender</td>
              <td>Male</td>
            </tr>
            <tr>
              <td className="font-bold">Blood Group</td>
              <td>B+</td>
            </tr>
          </tbody>
        </table>
        <div className="space-y-2">
          <div>
            <h1 className="font-bold">Address</h1>
            <p>Rajkot</p>
          </div>
          <div>
            <h1 className="font-bold">Company</h1>
            <p>PhoneWale ltd.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
