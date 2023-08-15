"use client"
import axios from "axios";
import { useEffect, useState } from "react"
import Candidates from "../components/Candidates";
import dynamic from 'next/dynamic';
import { useSession } from "next-auth/react";

const PieChart = dynamic(() => import('../components/charts/TopSixPie'), { ssr: false });

const Dashboard = () => {
    const { data: session } = useSession();
    const loggedInUser = session?.user;
    const [candidates, setCandidates] = useState([]);
    const [allCandidates, setAllCandidates] = useState([]);
    const [chartValues, setChartvalues] = useState([])
    const getCandidate = () =>{
        axios.get("https://api.electionresults.belgium.be/candidate")
        .then((res) =>{
            res.data.sort((a, b) => b.nrOfVotes - a.nrOfVotes);
            setAllCandidates(res.data.splice(6,))
            const spliced = res.data.splice(0,6);
            setCandidates(spliced);
            let values = [];
            spliced.map(val => {
                values.push({
                    value: val.nrOfVotes,
                    category: val.fullName.split(" ")[0]
                })
            });
            setChartvalues(values);
        })
    }

    useEffect(() =>{
        getCandidate()
    },[])

  return (
    <section className="bg-white m-5 h-auto pb-5">
        <div className="w-full py-3 px-8 mt-3 flex items-center justify-between  pl-[-0.75rem] pr-[-1.5rem] bg-red-500">
            <p className="font-bold text-[1.5rem] text-white uppercase">
                2023 Presidential Election Result Updates
            </p>
            <p className="lg:block hidden font-bold text-white">Hi, {loggedInUser?.username}</p>
        </div>
        <div className="lg:flex p-3 w-full">
            
            <div className="lg:w-[55%] w-full flex flex-wrap gap-5 p-5" key="hello">
                {
                    candidates?.map((candidate, index) => (
                            <Candidates key={index} name={candidate.fullName} votes={candidate.nrOfVotes} />
                    ))
                }
            </div>
            <div className="lg:w-[45%] w-full">
                <PieChart chartValues={chartValues} cand={candidates} />
            </div>
        </div>
        {<div className={`${loggedInUser?.role === 'Admin' || loggedInUser?.role === 'Super Admin' ? 'block' : 'hidden'} 
                px-10`}>
            <div className="mt-5 flex justify-center">
                <table className="border-collapse w-3/4">
                    <caption className="text-center font-bold p-5 uppercase underline text-[30px] text-red-500">
                    Other Candidates
                    </caption>
                    <thead className="uppercase bg-slate-900 text-white">
                        <tr>
                            <th>S/N</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Votes</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        allCandidates.map((user, index) =>(
                            <tr key={index}>
                                <td className="text-center">{index + 1}</td>
                                <td className="text-center">
                                    <i className="fa-solid fa-user text-[30px]"></i>
                                </td>
                                <td>{user.fullName} {user.lastName}</td>
                                <td className="text-center">{user.nrOfVotes}</td>
                            </tr>
                        ))
                       }
                    </tbody>
                </table>
            </div>
        </div> }
    </section>
  )
}

export default Dashboard