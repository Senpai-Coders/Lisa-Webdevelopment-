

import React,{useState} from 'react'
import "./Footer.scss"

const Footer =({isLight})=>{
	const [ isDarkMode, setIsDarkMode ] = useState(false)
	return(
		<div className={"Footer "+(isLight? 'txt-c-29 bg-white':'txt-gray1 bg-transparent')}>
      		<table>
				<thead>
					<tr>
						<th> PRODUCT </th>
						<th> HELP </th>
						<th> SOCIAL </th>
						<th> LEGAL </th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Graphic Design   </td>
						<td> Customer Support </td>
						<td> Facebook </td>
						<td> Terms of use </td>
					</tr>
					<tr>
						<td> Web Design </td>
						<td> Contacts </td>
						<td> Twitter </td>
						<td> Privacy Policy </td>
					</tr>
					<tr>
						<td> Web Development  </td>
						<td> </td>
						<td> Instagram </td>
						<td> </td>
					</tr>
					<tr>
						<td> Tech Repairs </td>
						<td>  </td>
						<td> Linkdin </td>
						<td>  </td>
					</tr>
					<tr>
						<td> Logo Designer </td>
						<td>  </td>
						<td>  </td>
						<td>  </td>
					</tr>
				</tbody>
			</table>
			<div className = "footer-credentials">
				<p> Skillfully crafted by <strong> Senpai_Coders</strong> </p>
				<p> Copyright © Liza tech 2021</p>
			</div>
			
    	</div>
		
	)
} 

export default Footer