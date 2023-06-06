import React from 'react'
import './HomePage.css';
import Card from '../components/Card';
import Skeleton from '@mui/material/Skeleton';
import { motion } from "framer-motion"

function HomePage({ movieList }) {
    return (
        <motion.div
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='homepage'>
            {
                movieList ? movieList.map((movie, index) => {
                    return <Card key={index}
                        name={movie.show.name}
                        image={movie.show.image.original}
                        score={movie.score}
                    />
                }) : (<Skeleton variant="rectangular" width={"80%"} height={500} />)
            }
        </motion.div>
    )
}

export default HomePage