import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeLogin from "./component/employee/EmployeeLogin";
import Department from "./component/employee/Department";
import SalesDFMP from "./component/employee/SalesDFMP";
import ClientSearch from "./component/employee/salesdfm/ClientSearch";
import ClientBusinessDetails from "./component/employee/salesdfm/ClientBusinessDetails";
import NewClientSignup from "./component/employee/salesdfm/NewClientSignup";
import SalesContract from "./component/employee/salesdfm/SalesContract";
import Payment from "./component/employee/Payment";
import PerformanceRecord from "./component/employee/salesdfm/PerformanceRecord";
import ClientInfoPack from "./component/employee/salesdfm/ClientInfoPack";
import Lead from "./component/employee/salesdfm/Lead";
import MessageCenter from "./component/employee/MessageCenter";
import Meetings from "./component/employee/salesdfm/Meetings";
import RealTimeCustomers from "./component/employee/salesdfm/RealTimeCustomers";
import MediaLibrary from "./component/employee/salesdfm/MediaLibrary";
import WarehouseSetupMedia from "./component/employee/salesdfm/WarehouseSetupMedia";
import OfficeSetupMedia from "./component/employee/salesdfm/OfficeSetupMedia";
import SalesTeamMedia from "./component/employee/salesdfm/SalesTeamMedia";
import YourProducts from "./component/employee/salesdfm/YourProducts";
import GraphicMedia from "./component/employee/salesdfm/GraphicMedia";
import OrderProcessingMedia from "./component/employee/salesdfm/OrderProcessingMedia";
import SecurityAndSafety from "./component/employee/salesdfm/SecurityAndSafety";
import ShowroomDisplay from "./component/employee/salesdfm/ShowroomDisplay";
import MarketingTeam from "./component/employee/salesdfm/MarketingTeam";
import LegalTeam from "./component/employee/salesdfm/LegalTeam";
import SupplyChain from "./component/employee/salesdfm/SupplyChain";
import ClientaccountManagerAdmin from "./component/employee/accountmanageradmin/ClientaccountManagerAdmin";
import Incomingnewclients from "./component/employee/accountmanageradmin/Incomingnewclients";
import Viewnewincomingclients from "./component/employee/accountmanageradmin/Viewnewincomingclients";
import RegisteredCompanyFormlawyers from "./component/employee/accountmanageradmin/RegisteredCompanyFormlawyers";
import CreateAccountsSuccessPage from "./component/employee/accountmanageradmin/CreateAccountsSuccessPage";
import JobAssign from "./component/employee/accountmanageradmin/JobAssign";
import ClientAccountManager from "./component/employee/clientaccountmanager/ClientAccountManager";
import Client from "./component/employee/clientaccountmanager/Client";
import ClientNewServiceRequest from "./component/employee/clientaccountmanager/ClientNewServiceRequest";
import ClientSalesRepresentative from "./component/employee/ClientSalesRepresentative/ClientSalesRepresentative";
import ItDepartment from "./component/employee/itdepartment/ItDepartment";
import ItDepartmentClient from "./component/employee/itdepartment/ItDepartmentClient";
import ItDeptEmployees from "./component/employee/itdepartment/ItDeptEmployees";
import ItDeptCustomers from "./component/employee/itdepartment/ItDeptCustomers";
import ItDeptPendingTask from "./component/employee/itdepartment/ItDeptPendingTask";
import TaskDetails from "./component/employee/itdepartment/TaskDetails";
import SocialMedia from "./component/employee/sociamedia/SocialMedia";
import SocialMediaClient from "./component/employee/sociamedia/SocialMediaClient";
import SocialMediaClientDetails from "./component/employee/sociamedia/SocialMediaClientDetails";
import SocialMediaArtworks from "./component/employee/sociamedia/SocialMediaArtworks";
import SocialMediaReports from "./component/employee/sociamedia/SocialMediaReports";
import Seo from "./component/employee/seo/Seo";
import SeoClient from "./component/employee/seo/SeoClient";
import SeoReports from "./component/employee/seo/SeoReports";
import GraphicDesigner from "./component/employee/graphicdesigner/GraphicDesigner";
import GraphicDesignerClient from "./component/employee/graphicdesigner/GraphicDesignerClient";
import GraphicDesignerClientDetails from "./component/employee/graphicdesigner/GraphicDesignerClientDetails";
import GraphicDesignerArtworks from "./component/employee/graphicdesigner/GraphicDesignerArtworks";
import OnlineSale from "./component/employee/onlinesale/OnlineSale";
import OnlineSaleClient from "./component/employee/onlinesale/OnlineSaleClient";
import OnlineSalesClientReport from "./component/employee/onlinesale/OnlineSalesClientReport";
import RetrunRegistry from "./component/employee/retrunregistry/RetrunRegistry";
import ReturnRefundCenter from "./component/employee/retrunregistry/ReturnRefundCenter";
import TechSupport from "./component/employee/tech-support/TechSupport";
import Warehouse from "./component/employee/warehouse/Warehouse";
import Accountant from "./component/employee/accountant/Accountant";
import AccountantClient from "./component/employee/accountant/AccountantClient";
import DmfpReportLodgements from "./component/employee/accountant/DmfpReportLodgements";
import OnlineSalesClientDetails from "./component/employee/onlinesale/OnlineSalesClientDetails";
import Index from "./component/clientComponent/pages/Index";
import Overview from "./component/clientComponent/pages/Overview";
import Inventory from "./component/clientComponent/pages/Inventory";
import LossProfit from "./component/clientComponent/pages/LossProfit";
import AddOns from "./component/clientComponent/pages/AddOns";
import Messages from "./component/clientComponent/pages/Messages";
import Orders from "./component/clientComponent/pages/Orders";
import Users from "./component/clientComponent/pages/Users";
import ManualOrderInput from "./component/clientComponent/pages/ManualOrderInput";
import CreateProduct from "./component/clientComponent/pages/CreateProduct";
import OrderDetails from "./component/clientComponent/pages/OrderDetails";
import ProductDetails from "./component/clientComponent/pages/ProductDetails";
import ProductList from "./component/clientComponent/pages/ProductList";
import InventoryList from "./component/clientComponent/pages/InventoryList";
import StockOrderHistory from "./component/clientComponent/pages/StockOrderHistory";
import AddOnsHistory from "./component/clientComponent/pages/AddOnsHistory";
import Lawyer from "./component/employee/Lawyer/Lawyer";
import Admin from "./component/employee/Admin/Admin";
import Roles from "./component/employee/Admin/Roles";
import Pages from "./component/employee/Admin/Pages";
import Countries from "./component/employee/Admin/Countries";
import Employee from "./component/employee/Admin/Employee";
import AdminClients from "./component/employee/Admin/AdminClients";
import Protected from "./Protected";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UpdateProduct from "./component/clientComponent/pages/UpdateProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />

        <Routes>
          <Route>
            <Route path="/employee" element={<EmployeeLogin />} />
            <Route path="/department" element={<Department />} />
            <Route path="/sales-dfmp" element={<SalesDFMP />} />
            <Route
              path="/sales-dfmp/client-search"
              element={<ClientSearch />}
            />
            <Route
              path="/sales-dfmp/client-search/client-business-details"
              element={<ClientBusinessDetails />}
            />
            <Route
              path="/sales-dfmp/new-client-signup"
              element={<NewClientSignup />}
            />
            <Route
              path="/sales-dfmp/new-client-signup/sales-contract"
              element={<SalesContract />}
            />
            <Route path="/payment" element={<Payment />} />
            <Route
              path="/sales-dfmp/performance-record"
              element={<PerformanceRecord />}
            />
            <Route
              path="/sales-dfmp/client-info-pack"
              element={<ClientInfoPack />}
            />
            <Route path="/sales-dfmp/leads" element={<Lead />} />
            <Route
              path="/sales-dfmp/message-center"
              element={<MessageCenter />}
            />
            <Route path="/sales-dfmp/meetings" element={<Meetings />} />
            <Route
              path="/sales-dfmp/real-time-customers"
              element={<RealTimeCustomers />}
            />
            <Route
              path="/sales-dfmp/media-library"
              element={<MediaLibrary />}
            />
            <Route
              path="/sales-dfmp/media-library/warehouse-setup-media"
              element={<WarehouseSetupMedia />}
            />
            <Route
              path="/sales-dfmp/media-library/office-setup-media"
              element={<OfficeSetupMedia />}
            />
            <Route
              path="/sales-dfmp/media-library/sales-team-media"
              element={<SalesTeamMedia />}
            />
            <Route
              path="/sales-dfmp/media-library/your-products-media"
              element={<YourProducts />}
            />
            <Route
              path="/sales-dfmp/media-library/seo-graphic-media"
              element={<GraphicMedia />}
            />
            <Route
              path="/sales-dfmp/media-library/order-processing-media"
              element={<OrderProcessingMedia />}
            />
            <Route
              path="/sales-dfmp/media-library/security+safty-media"
              element={<SecurityAndSafety />}
            />
            <Route
              path="/sales-dfmp/media-library/showroom-display-media"
              element={<ShowroomDisplay />}
            />
            <Route
              path="/sales-dfmp/media-library/marketing-team-media"
              element={<MarketingTeam />}
            />
            <Route
              path="/sales-dfmp/media-library/legal-team-account-media"
              element={<LegalTeam />}
            />
            <Route
              path="/sales-dfmp/media-library/supply-chain-media"
              element={<SupplyChain />}
            />
            <Route
              path="/client-account-manager-admin"
              element={<ClientaccountManagerAdmin />}
            />
            <Route
              path="/client-account-manager-admin/incoming-new-clients"
              element={<Incomingnewclients />}
            />
            <Route
              path="/client-account-manager-admin/incoming-new-clients/view-new-incoming-clients"
              element={<Viewnewincomingclients />}
            />
            <Route
              path="/client-account-manager-admin/incoming-new-clients/view-new-incoming-clients/client-business-details"
              element={<ClientBusinessDetails />}
            />
            <Route
              path="/client-account-manager-admin/message-center"
              element={<MessageCenter />}
            />
            <Route
              path="/client-account-manager-admin/registered-company-form-lawyers"
              element={<RegisteredCompanyFormlawyers />}
            />
            <Route
              path="/client-account-manager-admin/registered-company-form-lawyers/create-account-success-page"
              element={<CreateAccountsSuccessPage />}
            />
            <Route
              path="/client-account-manager-admin/registered-company-form-lawyers/create-account-success-page/job-assign"
              element={<JobAssign />}
            />
            <Route
              path="/client-account-manager"
              element={<ClientAccountManager />}
            />
            <Route
              path="/client-account-manager/message-center"
              element={<MessageCenter />}
            />
            <Route path="/client-account-manager/client" element={<Client />} />
            <Route
              path="/client-account-manager/client-new-service-request"
              element={<ClientNewServiceRequest />}
            />
            <Route
              path="/client-sales-representative"
              element={<ClientSalesRepresentative />}
            />
            <Route path="/it-department" element={<ItDepartment />} />
            <Route
              path="/it-department/message-center"
              element={<MessageCenter />}
            />
            <Route
              path="/it-department/it-dept-client"
              element={<ItDepartmentClient />}
            />
            <Route
              path="/it-department/it-dept-employees"
              element={<ItDeptEmployees />}
            />
            <Route
              path="/it-department/it-dept-customers"
              element={<ItDeptCustomers />}
            />
            <Route
              path="/it-department/it-dept-pending-task"
              element={<ItDeptPendingTask />}
            />
            <Route
              path="/it-department/it-dept-pending-task/task-details"
              element={<TaskDetails />}
            />
            <Route path="/social-media" element={<SocialMedia />} />
            <Route
              path="/social-media/message-center"
              element={<MessageCenter />}
            />
            <Route
              path="/social-media/social-media-client"
              element={<SocialMediaClient />}
            />
            <Route
              path="/social-media/social-media-client/social-media-client-details"
              element={<SocialMediaClientDetails />}
            />
            <Route
              path="/social-media/social-media-artworks"
              element={<SocialMediaArtworks />}
            />
            <Route
              path="/social-media/social-media-reports"
              element={<SocialMediaReports />}
            />
            <Route path="/seo" element={<Seo />} />
            <Route path="/seo/message-center" element={<MessageCenter />} />
            <Route path="/seo/seo-client" element={<SeoClient />} />
            <Route path="/seo/seo-reports" element={<SeoReports />} />

            <Route path="/graphic-designer" element={<GraphicDesigner />} />
            <Route
              path="/graphic-designer/message-center"
              element={<MessageCenter />}
            />
            <Route
              path="/graphic-designer/graphic-designer-client"
              element={<GraphicDesignerClient />}
            />
            <Route
              path="/graphic-designer/graphic-designer-client/graphic-designer-client-details"
              element={<GraphicDesignerClientDetails />}
            />
            <Route
              path="/graphic-designer/graphic-designer-artworks"
              element={<GraphicDesignerArtworks />}
            />
            <Route path="/online-sale" element={<OnlineSale />} />
            <Route
              path="/online-sale/message-center"
              element={<MessageCenter />}
            />
            <Route
              path="/online-sale/online-sale-client"
              element={<OnlineSaleClient />}
            />
            <Route
              path="/online-sale/online-sale-client/online-sales-client-details"
              element={<OnlineSalesClientDetails />}
            />
            <Route
              path="/online-sale/online-sales-client-report"
              element={<OnlineSalesClientReport />}
            />
            <Route path="/accountant" element={<Accountant />} />
            <Route
              path="/accountant/message-center"
              element={<MessageCenter />}
            />
            <Route
              path="/accountant/accountant-client"
              element={<AccountantClient />}
            />
            <Route
              path="/accountant/dmfp-report-lodgements"
              element={<DmfpReportLodgements />}
            />
            <Route path="/retrun-registry" element={<RetrunRegistry />} />
            <Route
              path="/retrun-registry/message-center"
              element={<MessageCenter />}
            />
            <Route
              path="/retrun-registry/return-refund-center"
              element={<ReturnRefundCenter />}
            />
            <Route path="/tech-support" element={<TechSupport />} />
            <Route path="/warehouse" element={<Warehouse />} />
            <Route path="/lawyer" element={<Lawyer />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/employee" element={<Employee />} />
            <Route path="/admin/roles" element={<Roles />} />
            <Route path="/admin/pages" element={<Pages />} />
            <Route path="/admin/countries" element={<Countries />} />
            <Route path="/admin/clients" element={<AdminClients />} />
          </Route>

          <Route>
            <Route path="/client" element={<Index />} />
            <Route
              path="/client/overview"
              element={<Protected Component={Overview} />}
            />
            <Route
              path="/client/inventory"
              element={<Protected Component={Inventory} />}
            />
            <Route
              path="/client/inventory/product-details/:_id"
              element={<Protected Component={ProductDetails} />}
            />
            <Route
              path="/client/inventory/create-product"
              element={<Protected Component={CreateProduct} />}
            />
            <Route
              path="/client/inventory/update-product/:_id"
              element={<Protected Component={UpdateProduct} />}
            />
            <Route
              path="/client/inventory/product-list"
              element={<Protected Component={ProductList} />}
            />
            <Route
              path="/client/inventory/inventory-list"
              element={<Protected Component={InventoryList} />}
            />
            <Route
              path="/client/inventory/stock-order-history"
              element={<Protected Component={StockOrderHistory} />}
            />

            <Route
              path="/client/loss-profit"
              element={<Protected Component={LossProfit} />}
            />
            <Route
              path="/client/add-ons"
              element={<Protected Component={AddOns} />}
            />
            <Route
              path="/client/add-ons/add-ons-history"
              element={<Protected Component={AddOnsHistory} />}
            />
            <Route
              path="/client/messages"
              element={<Protected Component={Messages} />}
            />
            <Route
              path="/client/orders"
              element={<Protected Component={Orders} />}
            />
            <Route
              path="/client/orders/manual-order-input"
              element={<Protected Component={ManualOrderInput} />}
            />
            <Route
              path="/client/orders/manual-order-input/order-details/:_id"
              element={<Protected Component={OrderDetails} />}
            />
            <Route
              path="/client/users"
              element={<Protected Component={Users} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
