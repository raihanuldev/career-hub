import React from 'react';
import Header from '../Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import Nabvar from '../Nabvar/Nabvar';
import Jobs from '../Jobs/Jobs';
import Features from '../FeaturedJobs/Features';

const Statistic = () => {
    const jobs = useLoaderData();
    // console.log(jobs);
    return (
        <section>
            <div>
                <Jobs
                    jobs={jobs}
                ></Jobs>
            </div>
            <div>
                <Features></Features>
            </div>
        </section>

    );
};

export default Statistic;