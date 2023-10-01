import React from 'react'
import aboutjson from './about.json'
import { Card, Space} from 'antd'

// import component
import TopNav from '../component/TopNav'

function List(props){
	return(

		<Space wrap size={50} style={{display:'flex', wordWrap:'break-word', flexWrap:'wrap', justifyContent:'center', justifyItems:'center'}}>
		{aboutjson.map((ml)=> (<Card
			title={ml.name}
			style={{width:200, border:'#00A0FA solid 2px'}}
			cover={<img alt="alt" src={ml.imagepath} height={200}></img>}
			>
				<p>{ml.description}</p>
			</Card>))}
		</Space>
	)
}

export default function AboutList() {
			return(
				<div>
					<TopNav />
					<h1>About Us</h1>
					<h3>Team members who contributed in the development of the website</h3>
				<div style={{marginTop:10}}>
					<List/>
				</div>
				</div>
			)
}
