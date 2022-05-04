/* Bootstrap */
import {
	MDBCheckbox,
	MDBAccordion,
	MDBAccordionItem,
	MDBCol,
	MDBContainer,
	MDBRange,
	MDBRow,
	MDBModal,
	MDBModalBody,
	MDBModalContent,
	MDBModalHeader,
	MDBModalDialog,
	MDBBtn,
} from "mdb-react-ui-kit";

import { useState } from "react";

/* Code */
export default function Page1() {
	const [modalOpen, setModalOpen] = useState(false);
	return (
		<>
			<MDBModal
				show={modalOpen}
				tabIndex='-1'
				backdrop
				staticBackdrop
				setShow={setModalOpen}
			>
				<MDBModalDialog centered>
					<MDBModalContent className='bg-secondary-bright text-white'>
						<MDBModalHeader className='border-secondary-bright'>
							<MDBBtn
								className='btn-close'
								color='none'
								onClick={() => {
									setModalOpen(false);
								}}
							></MDBBtn>
						</MDBModalHeader>
						<MDBModalBody className='pt-1 p-3 p-sm-5'>
							<h3>
								<strong>Test Modal</strong>
							</h3>
						</MDBModalBody>
					</MDBModalContent>
				</MDBModalDialog>
			</MDBModal>
			<MDBContainer fluid className='bg-primary'>
				<MDBRow>
					<MDBCol>
						<h1 className='font-weight-bold py-3 text-white'>Test</h1>
					</MDBCol>
				</MDBRow>
				<MDBRow>
					<MDBAccordion alwaysOpen>
						<MDBAccordionItem collapseId={1} headerTitle='Test1'>
							<MDBCheckbox value='cb1' label='Checkbox 1' id='test1-cb1' />
							<MDBCheckbox value='cb2' label='Checkbox 2' id='test1-cb2' />
						</MDBAccordionItem>
						<MDBAccordionItem collapseId={2} headerTitle='Test2'>
							<MDBRange value={10} min='1' max='10' label={`1 to 10`} />
						</MDBAccordionItem>
						<MDBAccordionItem collapseId={3} headerTitle='Test3'>
							<MDBCheckbox value='cb1' label='Checkbox 1' id='test3-cb1' />
							<MDBCheckbox value='cb2' label='Checkbox 2' id='test3-cb2' />
							<MDBCheckbox value='cb3' label='Checkbox 1' id='test3-cb3' />
							<MDBCheckbox value='cb4' label='Checkbox 2' id='test3-cb4' />
							<MDBCheckbox value='cb5' label='Checkbox 1' id='test3-cb5' />
							<MDBCheckbox value='cb6' label='Checkbox 2' id='test3-cb6' />
						</MDBAccordionItem>
					</MDBAccordion>
				</MDBRow>
			</MDBContainer>
		</>
	);
}
