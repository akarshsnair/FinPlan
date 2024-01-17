import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

Modal.setAppElement('#__next');

const StyledBillsPage = styled.div`
  font-family: 'Arial', sans-serif;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #E8F4FF;
  color: #fff;
  min-height: 100vh;
`;

const LeftBox = styled.div`
  width: 100%;
  border-radius: 15px;
  background-color: #383884;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.5);
  padding: 20px;
  margin-bottom: 20px;
`;

const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const SummaryBox = styled.div`
  border-radius: 15px;
  background-color:#383884;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.5);
  padding: 20px;
  margin-bottom: 20px;
`;

const SubscriptionBox = styled.div`
  border-radius: 15px;
  background-color: #383884;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.5);
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const SubscriptionItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  text-align: left; /* Align text to the left */
`;

const SubscriptionIcon = styled.span`
  margin-right: 10px;
`;


const SubscriptionTotal = styled.div`
  margin-top: 10px;
  color: 
 #Da727e;
`;

const AddButton = styled.button`
  background-color: #2ab96a;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 20px;
`;

const BillsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  border-radius: 15px;
  overflow: hidden; /* Hide the overflow due to border-radius */
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;
const TableHeader = styled.th`
  background-color: #B8B6C3;
  color: #343535;
  padding: 15px;
  border: none; /* Remove the border */
  text-align: left;
`;
const StyledHeading = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 20px;
`;
const TableRow = styled.tr`

    background-color: #A9c4ce;
    color:#343535;
    border: none;

  &:hover {
    background-color: #555;
  }
`;

const TableCell = styled.td`
  padding: 15px;
  border: none; /* Remove the border */
  position: relative;
  border-bottom: 1px solid #ddd; /* Add a bottom border */
  border-right: 1px solid #ddd; /* Add a right border */

  &:last-child {
    border-right: none; /* Remove the right border for the last cell in a row */
  }

  /* Display delete and edit options */
  &:hover {
    div {
      display: flex;
    }
  }
`;

const StyledModal = styled(Modal)`
  width: 300px;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  color: #333;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;


const StyledButton = styled.button`
  background-color: #A9c4ce;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 10px;

  &:last-child {
    background-color: #e74c3c;
  }
`;

const ExpenditureSummary = styled.div`
  h2 {
    color: #3498db;
  }

  p {
    margin: 10px 0;
  }
`;

const ActionOptions = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #2c3e50;
  padding: 10px;
  display: none; /* Initially hidden */
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.span`
  margin-right: 5px;
`;
const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const DeleteButton = styled.button`
  color: #e74c3c;
  padding: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const EditButton = styled.button`
  color: #2ecc71;
  padding: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 5px;
`;


const SubscriptionName = styled.div`
  color: #fff;
  flex-grow: 1;
`;

const AddSubscriptionButton = styled.button`
  background-color: #27ae60;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
`;

const TotalAmount = styled.p`
  margin-top: 10px;
  color: #Da727e;
  text-align: right;
`;
const SwitchInput = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 10px;
`;

const ResponsiveStyledBillsPage = styled(StyledBillsPage)`
  @media (min-width: 768px) {
    flex-direction: row;

    ${LeftBox} {
      width: 70%;
      margin-right: 20px;
    }

    ${RightBox} {
      width: 30%;
    }
  }
`;

const Bills = () => {
  const [bills, setBills] = useState([]);
  const [newBill, setNewBill] = useState({
    name: '',
    amount: '',
    dueDate: new Date(),
    status: 'pending',
    paid: false,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBillId, setSelectedBillId] = useState(null);

  useEffect(() => {
    // Load bills from localStorage on component mount
    const savedBills = JSON.parse(localStorage.getItem('bills')) || [];
    setBills(savedBills);
  }, []);

  useEffect(() => {
    // Save bills to localStorage whenever it changes
    localStorage.setItem('bills', JSON.stringify(bills));
  }, [bills]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBill((prevBill) => ({ ...prevBill, [name]: value }));
  };

  const handleDueDateChange = (date) => {
    setNewBill((prevBill) => ({ ...prevBill, dueDate: date }));
  };

  const openModal = () => {
    setIsModalOpen(true);
    setSelectedBillId(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddBill = () => {
    if (selectedBillId !== null) {
      setBills((prevBills) =>
        prevBills.map((bill) => (bill.id === selectedBillId ? { ...newBill, id: bill.id } : bill))
      );
    } else {
      setBills((prevBills) => [...prevBills, { ...newBill, id: Date.now() }]);
    }
  
    setNewBill({
      name: '',
      amount: '',
      dueDate: new Date(),
      status: 'pending',
      paid: false,
    });
    closeModal();
  };
  

  const handleEditBill = (id) => {
    const selectedBill = bills.find((bill) => bill.id === id);
    setNewBill(selectedBill);
    setSelectedBillId(id);
    setIsModalOpen(true);
  };

  const handleDeleteBill = (id) => {
    setBills((prevBills) => prevBills.filter((bill) => bill.id !== id));
  };

  const [subscriptions, setSubscriptions] = useState([
    { id: 1, name: 'Netflix', cost: 800 },
    { id: 2, name: 'Amazon Prime', cost: 1200 },
    { id: 3, name: 'Hotstar', cost: 1400 },
    { id: 4, name: 'Youtube', cost: 1000 },
    { id: 5, name: 'AWS', cost: 1600 },,
    // Add more initial subscriptions as needed
  ]);

  const handleAddSubscription = () => {
    const newName = window.prompt('Enter the name of the new subscription:');
    const newCost = parseFloat(window.prompt('Enter the cost of the new subscription:'));
  
    // Check if the user clicked Cancel or entered invalid data
    if (newName === null || isNaN(newCost)) {
      return;
    }
  
    const newSubscription = {
      id: subscriptions.length + 1,
      name: newName,
      cost: newCost,
    };
  
    setSubscriptions((prevSubscriptions) => [...prevSubscriptions, newSubscription]);
  };
  
  return (
    <ResponsiveStyledBillsPage>
      <LeftBox>
      <StyledHeading>MY BILL LIST</StyledHeading>
        <AddButton onClick={openModal}>Add Bill</AddButton>
        <BillsTable>
          <thead>
            <tr>
              <TableHeader>Name</TableHeader>
              <TableHeader>Amount</TableHeader>
              <TableHeader>Due Date</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader>Action</TableHeader>
            </tr>
          </thead>
          <tbody>
            {bills.map((bill) => (
              <TableRow key={bill.id}>
                <TableCell>{bill.name}</TableCell>
                <TableCell>${bill.amount}</TableCell>
                <TableCell>{new Date(bill.dueDate).toLocaleDateString()}</TableCell>
                <TableCell>{bill.paid ? 'Paid' : 'Not Paid'}</TableCell>
                <TableCell>
                  <EditButton onClick={() => handleEditBill(bill.id)}>
                    <Icon>
                      <FaEdit />
                    </Icon>
                  </EditButton>
                  <DeleteButton onClick={() => handleDeleteBill(bill.id)}>
                    <Icon>
                      <FaTrashAlt />
                    </Icon>
                  </DeleteButton>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </BillsTable>
      </LeftBox>

      <RightBox>
        <SummaryBox>
          <ExpenditureSummary>
            <h2>Expenditure Summary</h2>
            <p>Total Amount Paid: ${bills.filter((bill) => bill.paid).reduce((sum, bill) => sum + parseFloat(bill.amount), 0).toFixed(2)}</p>
            <p>Total Amount Unpaid: ${bills.filter((bill) => !bill.paid).reduce((sum, bill) => sum + parseFloat(bill.amount), 0).toFixed(2)}</p>
          </ExpenditureSummary>
        </SummaryBox>
        <SubscriptionBox>
  <h2>Subscriptions</h2>
  {subscriptions.map((subscription, index) => (
    <SubscriptionItem key={subscription?.id || index}>
      <SubscriptionIcon>🎥</SubscriptionIcon>
      {subscription && subscription.name ? (
        <SubscriptionName>{subscription.name}</SubscriptionName>
      ) : (
        <span>No Name</span>
      )}
      {subscription && subscription.cost ? (
        <SubscriptionTotal>${subscription.cost.toFixed(2)}</SubscriptionTotal>
      ) : (
        <span>No Cost</span>
      )}
    </SubscriptionItem>
  ))}
<TotalAmount>Total Amount: ${subscriptions.reduce((sum, sub) => sum + (sub?.cost || 0), 0).toFixed(2)}</TotalAmount>
<AddSubscriptionButton onClick={handleAddSubscription}>
  Add Subscription
</AddSubscriptionButton>
</SubscriptionBox>

      </RightBox>

      <StyledModal isOpen={isModalOpen} onRequestClose={closeModal}>
        <h2>{selectedBillId !== null ? 'Edit Bill' : 'Add Bill'}</h2>
        <StyledLabel>
          Name:
          <StyledInput type="text" name="name" value={newBill.name} onChange={handleInputChange} />
        </StyledLabel>
        <StyledLabel>
          Amount:
          <StyledInput type="text" name="amount" value={newBill.amount} onChange={handleInputChange} />
        </StyledLabel>
        <StyledLabel>
          Due Date:
          <DatePicker selected={newBill.dueDate} onChange={handleDueDateChange} />
        </StyledLabel>
        <SwitchLabel>
          Paid:
          <SwitchInput
            checked={newBill.paid}
            onChange={(e) => setNewBill((prevBill) => ({ ...prevBill, paid: e.target.checked }))}
          />
        </SwitchLabel>
        <StyledButton onClick={handleAddBill}>
          {selectedBillId !== null ? 'Edit Bill' : 'Add Bill'}
        </StyledButton>
        <StyledButton onClick={closeModal}>Cancel</StyledButton>
      </StyledModal>
    </ResponsiveStyledBillsPage>
  );
};

export default Bills;
