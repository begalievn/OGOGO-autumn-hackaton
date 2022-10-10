// modules
import React, {useEffect, useState} from 'react';
import axios from 'axios';

// components
import FilterOptions from "./components/filter-options/FilterOptions";
import FilterResults from "./components/filter-results/FilterResults";

// rtk-queries
import {
    useGetAllCoursesQuery,
    useLazyGetAllCoursesQuery,
    useLazyGetFilteredCoursesQuery
} from "../../../store/features/auth/authQuery";

// styles
import classes from './catalogPage.module.scss';
import {CircularProgress, Pagination} from "@mui/material";

const CatalogPage = () => {
    
    const [params, setParams] = useState({});
    
    const [page, setPage] = useState(1);
    
    const [getFiltered, { isLoading: filteredLoading, data: filteredData}] = useLazyGetFilteredCoursesQuery();
    
    const {data: courses, isLoading: coursesLoading} = useGetAllCoursesQuery(page);
    const [getCourses, { isLoading: coursesLoading2, data: coursesData}] = useLazyGetAllCoursesQuery(page);
    
    useEffect(() => {
        getCourses(page);
    }, [page]);
    
    const handleChange = (event, value) => {
        setPage(value);
    };
    
    console.log("page", page);
    
    console.log("courses", courses);
    console.log("filteredData", filteredData);
    
    useEffect(() => {
        let string = '';
        for(let key in params) {
            string += params[key] + '/';
        }
        if(string.length > 0) {
            getFiltered(string);
        }
        console.log("params*", string);
    }, [params]);
    
    if(filteredData) {
        return (
            <div className={classes.main}>
                <div className={classes.container}>
                    <FilterOptions setParams={setParams} />
                    <FilterResults courses={filteredData?.courses} />
                    {/*{*/}
                    {/*    coursesLoading ?*/}
                    {/*        <div className={classes.progress_container}>*/}
                    {/*            <CircularProgress/>*/}
                    {/*        </div>*/}
                    {/*        : <FilterResults courses={courses?.courses}/>*/}
                    {/*}*/}
                </div>
                <div className={classes.pagination}>
                    {
                        coursesLoading ?
                            null : <Pagination count={courses?.count} size="large" />
                    }
        
                </div>
            </div>
        )
    }
    
    
    return (
        <div className={classes.main}>
            <div className={classes.container}>
                <FilterOptions setParams={setParams} />
                
                {
                    coursesLoading ?
                        <div className={classes.progress_container}>
                            <CircularProgress/>
                        </div>
                        : <FilterResults courses={courses?.courses}/>
                }
            </div>
            <div className={classes.pagination}>
                {
                    coursesLoading ?
                        null : <Pagination count={courses?.count} page={page} onChange={handleChange} size="large" />
                }
                
            </div>
        </div>
    );
};

export default CatalogPage;
