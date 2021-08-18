import React  from "react";
import { Input,Button,Form } from "antd";
import {FilterFilled,SyncOutlined,LeftOutlined,RightOutlined,SettingFilled,AudioOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { Scrollbars } from 'react-custom-scrollbars';
import "./home-page.css";
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />

);

const onSearch = value => console.log(value);

const HomePageComponent = () => {
	return (
		<div className="HomePageContainer">
			<div className="container-fluid">
		{/*Header Container Start*/}
				<div className="header-container">
					<div className="row">
						<div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
							<div className="header-container-left">
								<div className="page-title mr-2">Tickets</div>
								<div>
									<Button className="btn-active mr-2">All</Button>
									<Button className="btn-default mr-2">Only My Tickets</Button>
									<Button className="btn-default mr-2">Recently Updated</Button>
								</div>
								<div>
									<Button  className="btn-default-icon mr-2" icon={<FilterFilled />} />
									<Button  className="btn-default-icon mr-2" icon={<SyncOutlined />} />

								</div>
							</div>
						</div>
						<div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
							<div className="header-container-right">
								<div className="page-title mr-2">
									<Search placeholder="Search" onSearch={onSearch} style={{ width: 250 }} />
								</div>
								<div>
									<Button className="btn-default mr-2" icon={<SettingFilled />}>Configurations</Button>
								</div>
								<div className="page-title mr-2">(0-30)</div>
								<div>
									<Button  className="btn-default-icon mr-2" icon={<LeftOutlined />} />
									<Button  className="btn-default-icon mr-2" icon={<RightOutlined />} />
								</div>
							</div>
						</div>
					</div>
				</div>
			{/*Header Container End*/}

			{/*Body Content Start*/}
				<div className="page-body-container">
					<div className="row">
						{/*received Oredr*/}
						<div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
							<div className="page-card-design">
								<div className="page-card-header">
									Received Orders (19)
								</div>
								<div className="page-card-body-content">
									<Scrollbars className="order-card-design-scroll-height hidden-scroll-x"
                        renderTrackHorizontal={props => <div {...props} className="track-horizontal" style={{display:"none"}}/>}
                        renderThumbHorizontal={props => <div {...props} className="thumb-horizontal" style={{display:"none"}}/>}
                    >
										{/*Order Card*/}
										<div className="order-card-design-green mb-3">
											<div className="row">
												<div className="col-12 mb-2">
													<div className="serial-number">
														#26 <span className="serial-badge">Responsive Due</span>
													</div>
												</div>
												<div className="col-12 mb-1">
													<div className="oredr-number">
														Order No: #45
													</div>
												</div>
												<div className="col-12 mb-3">
													<div className="card-text">
														Paratha Side Dish (2 Nos), Plain Dosa, Podi Ghee Dosa (1 Nos),
														Butter Roti (5 Nos)
													</div>
												</div>
												<div className="col-8 mb-1">
													<div className="card-text">
														Due: <span className="semi-bold">May 31, 2019 3:39 PM</span>
													</div>
												</div>
												<div className="col-4 mb-1">
													<div className="card-text">
														Assigned To
													</div>
												</div>
											</div>
										</div>
										{/*Order Card*/}
										{/*Order Card*/}
										<div className="order-card-design-red mb-3">
											<div className="row">
												<div className="col-12 mb-2">
													<div className="serial-number">
														#25 <span className="serial-badge">Responsive Due</span>
													</div>
												</div>
												<div className="col-12 mb-1">
													<div className="oredr-number">
														Order No: #201
													</div>
												</div>
												<div className="col-12 mb-3">
													<div className="card-text">
														Paratha Side Dish (2 Nos), Plain Dosa, Podi Ghee Dosa (1 Nos),
														Butter Roti (5 Nos)
													</div>
												</div>
												<div className="col-8 mb-1">
													<div className="card-text">
														Due: <span className="semi-bold">May 29, 2019 10:37 AM</span>
													</div>
												</div>
												<div className="col-4 mb-1">
													<div className="card-text">
														Assigned To
													</div>
												</div>
											</div>
										</div>
										{/*Order Card*/}
										{/*Order Card*/}
										<div className="order-card-design-green mb-3">
											<div className="row">
												<div className="col-12 mb-2">
													<div className="serial-number">
														#24 <span className="serial-badge">Responsive Due</span>
													</div>
												</div>
												<div className="col-12 mb-1">
													<div className="oredr-number">
														Order No: #1
													</div>
												</div>
												<div className="col-12 mb-3">
													<div className="card-text">
														3 Phulka, 2 Chicken Gravy, 2 Barrota, 5 Ice Creams,
														Paratha Side Dish (2 Nos), Plain Dosa, Podi Ghee Dosa (1 Nos)
													</div>
												</div>
												<div className="col-8 mb-1">
													<div className="card-text">
														Due: <span className="semi-bold">May 31, 2019 3:36 PM</span>
													</div>
												</div>
												<div className="col-4 mb-1">
													<div className="card-text">
														Assigned To
													</div>
												</div>
											</div>
										</div>
										{/*Order Card*/}
										{/*Order Card*/}
										<div className="order-card-design-green mb-3">
											<div className="row">
												<div className="col-12 mb-2">
													<div className="serial-number">
														#23 <span className="serial-badge">Responsive Due</span>
													</div>
												</div>
												<div className="col-12 mb-1">
													<div className="oredr-number">
														Order No: #600
													</div>
												</div>
												<div className="col-12 mb-3">
													<div className="card-text">
														1 Dosa, 2 Set poori, 3 Phulka, 1 White Egg,
														3 Phulka, 2 Chicken Gravy, 2 Barrota, 5 Ice Creams,

													</div>
												</div>
												<div className="col-8 mb-1">
													<div className="card-text">
														Due: <span className="semi-bold">May 31, 2019 3:35 PM</span>
													</div>
												</div>
												<div className="col-4 mb-1">
													<div className="card-text">
														Assigned To
													</div>
												</div>
											</div>
										</div>
										{/*Order Card*/}
										{/*Order Card*/}
										<div className="order-card-design-green mb-3">
											<div className="row">
												<div className="col-12 mb-2">
													<div className="serial-number">
														#26 <span className="serial-badge">Responsive Due</span>
													</div>
												</div>
												<div className="col-12 mb-1">
													<div className="oredr-number">
														Order No: #45
													</div>
												</div>
												<div className="col-12 mb-3">
													<div className="card-text">
														Paratha Side Dish (2 Nos), Plain Dosa, Podi Ghee Dosa (1 Nos),
														Butter Roti (5 Nos)
													</div>
												</div>
												<div className="col-8 mb-1">
													<div className="card-text">
														Due: <span className="semi-bold">May 31, 2019 3:39 PM</span>
													</div>
												</div>
												<div className="col-4 mb-1">
													<div className="card-text">
														Assigned To
													</div>
												</div>
											</div>
										</div>
										{/*Order Card*/}
										{/*Order Card*/}
										<div className="order-card-design-red mb-3">
											<div className="row">
												<div className="col-12 mb-2">
													<div className="serial-number">
														# 25 <span className="serial-badge">Responsive Due</span>
													</div>
												</div>
												<div className="col-12 mb-1">
													<div className="oredr-number">
														Order No: #201
													</div>
												</div>
												<div className="col-12 mb-3">
													<div className="card-text">
														Paratha Side Dish (2 Nos), Plain Dosa, Podi Ghee Dosa (1 Nos),
														Butter Roti (5 Nos)
													</div>
												</div>
												<div className="col-8 mb-1">
													<div className="card-text">
														Due: <span className="semi-bold">May 29, 2019 10:37 AM</span>
													</div>
												</div>
												<div className="col-4 mb-1">
													<div className="card-text">
														Assigned To
													</div>
												</div>
											</div>
										</div>
										{/*Order Card*/}
										{/*Order Card*/}
										<div className="order-card-design-green mb-3">
											<div className="row">
												<div className="col-12 mb-2">
													<div className="serial-number">
														# 24 <span className="serial-badge">Responsive Due</span>
													</div>
												</div>
												<div className="col-12 mb-1">
													<div className="oredr-number">
														Order No: #1
													</div>
												</div>
												<div className="col-12 mb-3">
													<div className="card-text">
														3 Phulka, 2 Chicken Gravy, 2 Barrota, 5 Ice Creams,
														Paratha Side Dish (2 Nos), Plain Dosa, Podi Ghee Dosa (1 Nos)
													</div>
												</div>
												<div className="col-8 mb-1">
													<div className="card-text">
														Due: <span className="semi-bold">May 31, 2019 3:36 PM</span>
													</div>
												</div>
												<div className="col-4 mb-1">
													<div className="card-text">
														Assigned To
													</div>
												</div>
											</div>
										</div>
										{/*Order Card*/}
										{/*Order Card*/}
										<div className="order-card-design-green mb-3">
											<div className="row">
												<div className="col-12 mb-2">
													<div className="serial-number">
														# 23 <span className="serial-badge">Responsive Due</span>
													</div>
												</div>
												<div className="col-12 mb-1">
													<div className="oredr-number">
														Order No: #600
													</div>
												</div>
												<div className="col-12 mb-3">
													<div className="card-text">
														1 Dosa, 2 Set poori, 3 Phulka, 1 White Egg,
														3 Phulka, 2 Chicken Gravy, 2 Barrota, 5 Ice Creams,

													</div>
												</div>
												<div className="col-8 mb-1">
													<div className="card-text">
														Due: <span className="semi-bold">May 31, 2019 3:35 PM</span>
													</div>
												</div>
												<div className="col-4 mb-1">
													<div className="card-text">
														Assigned To
													</div>
												</div>
											</div>
										</div>
										{/*Order Card*/}
									</Scrollbars>
								</div>
							</div>
						</div>
						{/*received Oredr*/}

						{/*received Oredr*/}
						<div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
							<div className="page-card-design">
								<div className="page-card-header">
									Order In Progress (1)
								</div>
								<div className="page-card-body-content">
									<Scrollbars className="order-card-design-scroll-height hidden-scroll-x"
                        renderTrackHorizontal={props => <div {...props} className="track-horizontal" style={{display:"none"}}/>}
                        renderThumbHorizontal={props => <div {...props} className="thumb-horizontal" style={{display:"none"}}/>}
                    >
										{/*Order Card*/}
										<div className="order-card-design-green mb-3">
											<div className="row">
												<div className="col-12 mb-2">
													<div className="serial-number">
														#27 <span className="serial-badge">Responsive Due</span>
													</div>
												</div>
												<div className="col-12 mb-1">
													<div className="oredr-number">
														Order No: #456
													</div>
												</div>
												<div className="col-12 mb-3">
													<div className="card-text">
														Paratha Side Dish (2 Nos), Plain Dosa, Podi Ghee Dosa (1 Nos),
														Butter Roti (5 Nos)
													</div>
												</div>
												<div className="col-8 mb-1">
													<div className="card-text">
														Due: <span className="semi-bold">May 31, 2019 3:40 PM</span>
													</div>
												</div>
												<div className="col-4 mb-1">
													<div className="card-text">
														Assigned To
													</div>
												</div>
											</div>
										</div>
										{/*Order Card*/}
									</Scrollbars>
								</div>
							</div>
						</div>
						{/*received Oredr*/}

						{/*received Oredr*/}
						<div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
							<div className="page-card-design">
								<div className="page-card-header">
									Order is ready for Delivery (0)
								</div>
								<div className="page-card-body-content">
									<Scrollbars className="order-card-design-scroll-height hidden-scroll-x"
                        renderTrackHorizontal={props => <div {...props} className="track-horizontal" style={{display:"none"}}/>}
                        renderThumbHorizontal={props => <div {...props} className="thumb-horizontal" style={{display:"none"}}/>}
                    >
										
									</Scrollbars>
								</div>
							</div>
						</div>
						{/*received Oredr*/}

						{/*received Oredr*/}
						<div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
							<div className="page-card-design">
								<div className="page-card-header">
									Order Picked Up (0)
								</div>
								<div className="page-card-body-content">
									<Scrollbars className="order-card-design-scroll-height hidden-scroll-x"
                        renderTrackHorizontal={props => <div {...props} className="track-horizontal" style={{display:"none"}}/>}
                        renderThumbHorizontal={props => <div {...props} className="thumb-horizontal" style={{display:"none"}}/>}
                    >
										
									</Scrollbars>
								</div>
							</div>
						</div>
						{/*received Oredr*/}

					</div>
				</div>
			{/*Body Content End*/}
			</div>
		</div>
	)
};
export default HomePageComponent;