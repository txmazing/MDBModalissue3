/* Bootstrap */
import {
	MDBBtn,
	MDBCol,
	MDBContainer,
	MDBDatepicker,
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
	const [modal2, setModal2] = useState(false);

	const [datepickerValue, setDatepickerValue] = useState("");

	return (
		<>
			<MDBContainer
				fluid
				className='bg-primary text-white'
				style={{ height: "200vh" }}
			>
				<MDBContainer style={{ paddingTop: "75px" }}>
					<MDBRow>
						<MDBCol className='pt-3'>
							<MDBRow className='my-4'>
								<MDBCol>
									<MDBDatepicker
										value={datepickerValue}
										setValue={setDatepickerValue}
										inputToggle
									/>
									<MDBBtn
										className='rounded-pill fw-bold mt-4'
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
							<MDBBtn
								className='rounded-pill fw-bold mt-4 '
								color='primary'
								onClick={() => setModal(false)}
							>
								Close
							</MDBBtn>
							<MDBBtn
								className='rounded-pill fw-bold mt-4 '
								color='primary'
								onClick={() => {
									setModal(false);
									setTimeout(() => {
										setModal2(true);
									}, 200);
								}}
							>
								Next Modal
							</MDBBtn>
						</MDBModalBody>
					</MDBModalContent>
				</MDBModalDialog>
			</MDBModal>

			<MDBModal
				show={modal2}
				tabIndex='-1'
				backdrop={false}
				staticBackdrop
				setShow={setModal2}
			>
				<MDBModalDialog centered>
					<MDBModalContent className='bg-secondary-bright text-white'>
						<MDBModalHeader className='border-secondary-bright'>
							<MDBBtn
								className='btn-close'
								color='none'
								onClick={() => {
									setModal2(false);
								}}
							></MDBBtn>
						</MDBModalHeader>
						<MDBModalBody>
							<MDBBtn
								className='rounded-pill fw-bold mt-4 '
								color='primary'
								onClick={() => setModal2(false)}
							>
								Close
							</MDBBtn>
							<MDBBtn
								className='rounded-pill fw-bold mt-4 '
								color='primary'
								onClick={() => {
									setModal2(false);
									setTimeout(() => {
										setModal(true);
									}, 200);
								}}
							>
								Prev Modal
							</MDBBtn>
						</MDBModalBody>
					</MDBModalContent>
				</MDBModalDialog>
			</MDBModal>
		</>
	);
}
