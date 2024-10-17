import { useQuery } from "react-query";
import * as apiClient from "../api-client";
import LatestDestinationCard from "../components/LastestDestinationCard";
import HomeContent from "../components/HomeContent";

const Home = () => {
  const { data: hospitals } = useQuery("fetchQuery", () =>
    apiClient.fetchHospitals()
  );

  const topRowHospitals = hospitals?.slice(0, 2) || [];
  const bottomRowHospitals = hospitals?.slice(2) || [];

  return (
    <div className="space-y-3">
      <HomeContent/>

      <h2 className="text-3xl font-bold">Latest Hospitals</h2>
      <p>Most recent hospitals and clinics added</p>
      <div className="grid gap-4">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          {topRowHospitals.map((hospital) => (
            <LatestDestinationCard hospital={hospital} key={hospital._id} />
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {bottomRowHospitals.map((hospital) => (
            <LatestDestinationCard hospital={hospital} key={hospital._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;



// import { useQuery } from "react-query";
// import * as apiClient from "../api-client";
// import LatestDestinationCard from "../components/LastestDestinationCard";

// const Home = () => {
//   const { data: hospitals } = useQuery("fetchQuery", () =>
//     apiClient.fetchHospitals()
//   );

//   const topRowHospitals = hospitals?.slice(0, 2) || [];
//   const bottomRowHospitals = hospitals?.slice(2) || [];

//   return (
//     <div className="space-y-3">
//       <div>INSERT HERE</div>
//       <h2 className="text-3xl font-bold">Latest Hospitals</h2>
//       <p>Most recent hospitals and clinics added</p>
//       <div className="grid gap-4">
//         <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
//           {topRowHospitals.map((hospital) => (
//             <LatestDestinationCard hospital={hospital} />
//           ))}
//         </div>
//         <div className="grid md:grid-cols-3 gap-4">
//           {bottomRowHospitals.map((hospital) => (
//             <LatestDestinationCard hospital={hospital} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
