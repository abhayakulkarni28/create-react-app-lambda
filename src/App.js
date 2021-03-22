import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import CustomerLoginScreen from './screens/CustomerScreens/CustomerLoginScreen'
import EmployeeLoginScreen from './screens/EmployeeScreens/EmployeeLoginScreen'
import InsuranceInfoScreen from './screens/InsuranceInfoScreen'
import ContactUsScreen from './screens/ContactUsScreen'
import CustomerProfileScreen from './screens/CustomerScreens/CustomerProfileScreen'
import EmployeeScreen from './screens/EmployeeScreens/EmployeeScreen'

import AdminProfileScreen from './screens/AdminScreens/AdminProfileScreen'
import ManagerProfileScreen from './screens/ManagerScreens/ManagerProfileScreen';
import AgentProfileScreen from './screens/AgentScreens/AgentProfileScreen';

import GrievanceRegistrationScreen from './screens/CustomerScreens/GrievanceRegistrationScreen'

import LocatorsScreen from './screens/LocatorsScreen'
import AboutUsScreen from './screens/AboutUsScreen'
import InsurancePlansScreen from './screens/InsurancePlansScreen'
import HealthPlansScreen from './screens/HealthPlansScreen';
import AddNewPolicyScreen from './screens/AdminScreens/AddNewPolicyScreen';
import AddNewAgentScreen from './screens/ManagerScreens/AddNewAgentScreen'
import AddNewManagerScreen from './screens/AdminScreens/AddNewManagerScreen';
import ListOfCustomersScreen from './screens/AdminScreens/ListOfCustomersScreen'
import ListOfAgentsScreen from './screens/AdminScreens/ListOfAgentsScreen'
import ShowPolicyScreen from "./screens/AdminScreens/ShowPolicyScreen"
import GrievanceReportScreen from "./screens/ManagerScreens/GrievanceReportScreen";
import ListOfManagersScreen from "./screens/AdminScreens/ListOfManagersScreen"
import GrievanceSettlementScreen from "./screens/ManagerScreens/GrievanceSettlementScreen";
import AgentReportScreen from "./screens/ManagerScreens/ListOfAgents"
import PolicyWiseCustomersScreen from "./screens/ManagerScreens/PolicyWiseCustomersScreen";
import ManagerShowPolicyScreen from "./screens/ManagerScreens/ManagerShowPolicyScreen";

import CustomerPolicyStatusScreen from "./screens/CustomerScreens/CustomerPolicyStatusScreen"
import CustomerComplaintStatusScreen from "./screens/CustomerScreens/CustomerComplaintScreen"
import CustomerPremiumPaymentStatementScreen from "./screens/CustomerScreens/CustomerPremiumPaymentStmtScreen"
import ClaimHistoryScreen from "./screens/CustomerScreens/CustomerClaimHistoryScreen"
import CustomerApplyForClaimScreen from "./screens/CustomerScreens/CustomerApplyForClaimScreen";
import CustomerPolicyRevivalScreen from "./screens/CustomerScreens/CustomerPolicyRevivalScreen";
import CustomerClaimStatusScreen from "./screens/CustomerScreens/CustomerClaimStatusScreen"
import ClaimSettlementScreen from "./screens/ManagerScreens/ClaimSettlementScreen";
import ClaimReportScreen from "./screens/ManagerScreens/ClaimReportScreen";
import AddNewCustomerScreen from "./screens/AgentScreens/AddNewCustomerScreen";
import AddCustomerPolicyDetails from "./screens/AgentScreens/AddCustomerPolicyDetails";
import ShowCustomerPolicyDetailsScreen from './screens/AgentScreens/ShowCustomerPolicyDetails';
import PolicyReminderScreen from './screens/AgentScreens/PolicyReminderScreen';
import AdminMyProfileScreen from './screens/AdminScreens/MyProfileScreen';
import AgentMyProfileScreen from './screens/AgentScreens/MyProfileScreen';
import ManagerMyProfileScreen from './screens/ManagerScreens/MyProfileScreen';
import CustomerMyProfileScreen from './screens/CustomerScreens/MyProfileScreen';

function App() {
  return (
    <div>
      <Router>
      <Switch>
        <Route exact path="/" component={HomeScreen}/>
        <Route path="/customer/login" component={CustomerLoginScreen}/>
        <Route path="/employee/login" component={EmployeeLoginScreen}/>
        <Route path="/insurance-info" component={InsuranceInfoScreen}/>
        <Route path="/contact-us" component={ContactUsScreen}/>
        <Route path="/customer/profile" component={CustomerProfileScreen}/>
        <Route path="/employee/profile" component={EmployeeScreen}/>
        <Route path="/admin/profile" component={AdminProfileScreen}/>
        <Route path="/manager/profile" component={ManagerProfileScreen}/>
        <Route path="/agent/profile" component={AgentProfileScreen}/>
        <Route path="/customer/register-grievance" component={GrievanceRegistrationScreen}/>
        <Route path="/locators" component={LocatorsScreen}/>
        <Route path="/about-us" component={AboutUsScreen}/>
        <Route path="/products/insurance-plans" component={InsurancePlansScreen}/>
        <Route path="/products/health-plans" component={HealthPlansScreen}/>
        <Route path="/admin/customer-list" component={ListOfCustomersScreen} />
        <Route path="/admin/add-new-policy" component={AddNewPolicyScreen}/>
        <Route path="/admin/add-new-manager" component={AddNewManagerScreen}/>
        <Route path="/admin/agent-list" component={ListOfAgentsScreen} />
        <Route path="/admin/manager-list" component={ListOfManagersScreen} />
        <Route path="/admin/policy-list" component={ShowPolicyScreen} />
        <Route path="/manager/register-agent" component={AddNewAgentScreen} />
        <Route path="/manager/grievance-report" component={GrievanceReportScreen}/>
        <Route path="/manager/settle-grievance" component={GrievanceSettlementScreen}/>
        <Route path="/manager/agents-report" component={AgentReportScreen}/>
        <Route path="/manager/policy-customer-report" component={PolicyWiseCustomersScreen}/>
        <Route path="/manager/policy-list" component={ManagerShowPolicyScreen}/>

        <Route path="/customer/cust-policy-status" component={CustomerPolicyStatusScreen}/>
        <Route path="/customer/cust-complaint-status" component={CustomerComplaintStatusScreen}/>
        <Route path="/customer/cust-claim-history" component={ClaimHistoryScreen}/>
        <Route path="/customer/premium-stmt" component={CustomerPremiumPaymentStatementScreen}/>
        <Route path="/customer/apply-for-claim" component={CustomerApplyForClaimScreen}/>
        <Route path="/customer/policy_revival" component={CustomerPolicyRevivalScreen}/>
        <Route path="/customer/claim-status" component={CustomerClaimStatusScreen}/>
        <Route path="/manager/settle-claim" component={ClaimSettlementScreen}/>
        <Route path="/manager/claim-report" component={ClaimReportScreen}/>
        <Route path="/manager/policy-customer-report" component={PolicyWiseCustomersScreen}/>
        <Route path="/customer/cust-policy-status" component={CustomerPolicyStatusScreen}/>
        <Route path="/customer/cust-complaint-status" component={CustomerComplaintStatusScreen}/>
        <Route path="/customer/cust-claim-history" component={ClaimHistoryScreen}/>
        <Route path="/manager/policy-customer-report" component={PolicyWiseCustomersScreen}/>
        <Route path="/agent/add-new-customer" component={AddNewCustomerScreen}/>
        <Route path="/agent/add-customer-policy-details" component={AddCustomerPolicyDetails}/>
        <Route path="/agent/show-customer-policy-details" component={ShowCustomerPolicyDetailsScreen}/>
        <Route path="/agent/policy-due-date-reminder" component={PolicyReminderScreen}/>
        <Route path="/admin/profile-update" component={AdminMyProfileScreen}/>
        <Route path="/agent/profile-update" component= {AgentMyProfileScreen}/>
        <Route path="/manager/profile-update" component={ManagerMyProfileScreen}/>
        <Route path="/customer/profile-update" component={CustomerMyProfileScreen}/>
      </Switch>
      </Router>
    </div>
  )
}

export default App;
