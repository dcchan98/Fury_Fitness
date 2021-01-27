/** @format */

import React from "react";

import { Doughnut } from "react-chartjs-2";



export default function HomePage() {

  const data = {
        labels: ['Proteins', 'Carbs', 'Fats'],
        datasets: [{
            label: '# of Votes',
            data: [40, 40, 20],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 3
        }]
    }

    const options ={
       maintainAspectRatio: true ,
       title: {
            display: true,
            text: 'Macronutrient percentage'
        }
    }
	return (
		<div>
			<Doughnut
				data={data}
				width={100}
				height={50}
				options={options}
			/>
		</div>
	);
}
