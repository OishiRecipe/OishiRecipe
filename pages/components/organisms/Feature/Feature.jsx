import React from "react";
import Image from "next/image";
import feature_share from "../../../../public/images/feature_share_recepies.svg";

export const Feature = () => {
	return (
		<div>
			<div className='feature-card'>
				<Image
					src={feature_share}
					alt='feature img that showcase share your recepies'
					width='250'
					height='250'
					layout='responsive'
				/>
				<h2 className='feature-title'>Share your recepies</h2>
				<p className='feature-description'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae corrupti cupiditate
					blanditiis provident rerum veniam sed obcaecati alias, culpa enim non necessitatibus
					laboriosam esse laudantium, tempore asperiores nesciunt! Totam, molestias.
				</p>
			</div>
			<div className='feature-card'>
				<img src='' alt='feature img that showcase Get Feedback from the community' />
				<h2 className='feature-title'>Get Feedback from the community</h2>
				<p className='feature-description'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae corrupti cupiditate
					blanditiis provident rerum veniam sed obcaecati alias, culpa enim non necessitatibus
					laboriosam esse laudantium, tempore asperiores nesciunt! Totam, molestias.
				</p>
			</div>
			<div className='feature-card'>
				<img src='' alt='feature img that showcase Build your Networks of cookers' />
				<h2 className='feature-title'>Build your Networks of cookers</h2>
				<p className='feature-description'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae corrupti cupiditate
					blanditiis provident rerum veniam sed obcaecati alias, culpa enim non necessitatibus
					laboriosam esse laudantium, tempore asperiores nesciunt! Totam, molestias.
				</p>
			</div>
			<div className='feature-card'>
				<img src='' alt='feature img that showcase Explore different cultural recepies' />
				<h2 className='feature-title'>Explore different cultural recepies</h2>
				<p className='feature-description'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae corrupti cupiditate
					blanditiis provident rerum veniam sed obcaecati alias, culpa enim non necessitatibus
					laboriosam esse laudantium, tempore asperiores nesciunt! Totam, molestias.
				</p>
			</div>
			<div className='feature-card'>
				<img src='' alt='Just enjoy eating' />
				<h2 className='feature-title'>Just enjoy eating</h2>
				<p className='feature-description'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae corrupti cupiditate
					blanditiis provident rerum veniam sed obcaecati alias, culpa enim non necessitatibus
					laboriosam esse laudantium, tempore asperiores nesciunt! Totam, molestias.
				</p>
			</div>
		</div>
	);
};
