/* Bootstrap */
import {
	MDBBtn,
	MDBCol,
	MDBContainer,
	MDBInput,
	MDBModal,
	MDBModalBody,
	MDBModalContent,
	MDBModalDialog,
	MDBModalHeader,
	MDBRow,
} from "mdb-react-ui-kit";
/* React */
import { useState } from "react";

/* Code */
export default function Page1() {
	const [modal, setModal] = useState(false);

	const [value1, setValue1] = useState("");
	const [value2, setValue2] = useState("");
	const [value3, setValue3] = useState("");

	return (
		<>
			<MDBContainer fluid className='bg-primary text-white'>
				<MDBContainer style={{ paddingTop: "75px" }}>
					<MDBRow>
						<MDBCol className='pt-3'>
							<MDBRow className='my-4'>
								<MDBCol>
									<MDBInput
										tabIndex='3'
										className='mb-4'
										label='value1'
										id='value1a'
										type='text'
										size='lg'
										contrast
										value={value1}
										onChange={(e) => setValue1(e.target.value)}
									/>
									<MDBInput
										tabIndex='1'
										className='mb-4'
										label='value2'
										id='value2a'
										type='text'
										size='lg'
										contrast
										value={value2}
										onChange={(e) => setValue2(e.target.value)}
									/>
									<MDBInput
										className='mb-4'
										tabIndex='2'
										label='value3'
										id='value3a'
										type='text'
										size='lg'
										contrast
										value={value3}
										onChange={(e) => setValue3(e.target.value)}
									/>
									<MDBBtn
										className='rounded-pill fw-bold'
										color='secondary'
										onClick={() => setModal(true)}
									>
										Open modal
									</MDBBtn>
								</MDBCol>
							</MDBRow>
						</MDBCol>
					</MDBRow>
				</MDBContainer>
			</MDBContainer>

			<MDBModal
				show={modal}
				tabIndex='-1'
				backdrop={false}
				staticBackdrop
				setShow={setModal}
			>
				<MDBModalDialog centered>
					<MDBModalContent className='bg-secondary-bright text-white'>
						<MDBModalHeader className='border-secondary-bright'>
							<MDBBtn
								className='btn-close'
								color='none'
								onClick={() => {
									setModal(false);
								}}
							></MDBBtn>
						</MDBModalHeader>
						<MDBModalBody>
							<MDBInput
								tabIndex='3'
								className='mt-4'
								label='value1'
								id='value1'
								type='text'
								value={value1}
								onChange={(e) => setValue1(e.target.value)}
							/>
							<MDBInput
								tabIndex='1'
								className='mt-4'
								label='value2'
								id='value2'
								type='text'
								value={value2}
								onChange={(e) => setValue2(e.target.value)}
							/>
							<MDBInput
								tabIndex='2'
								className='mt-4'
								label='value3'
								id='value3'
								type='text'
								value={value3}
								onChange={(e) => setValue3(e.target.value)}
							/>
							<MDBBtn
								className='rounded-pill fw-bold mt-4 '
								color='primary'
								onClick={() => setModal(false)}
							>
								Close
							</MDBBtn>
						</MDBModalBody>
					</MDBModalContent>
				</MDBModalDialog>
			</MDBModal>
		</>
	);
}
