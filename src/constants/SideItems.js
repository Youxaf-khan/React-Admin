import DashboardIcon from '../assets/sideBar/dashboard.svg';
import OrdersIcon from '../assets/sideBar/orders.svg';
import InventoryIcon from '../assets/sideBar/inventory.svg';
import RestockIcon from '../assets/sideBar/restock.svg';
import ChannelsIcon from '../assets/sideBar/channels.svg';
import MarketingIcon from '../assets/sideBar/marketing.svg';
import CustomersIcon from '../assets/sideBar/customers.svg';
import MyWebsiteIcon from '../assets/sideBar/website.svg';
import ReportsIcon from '../assets/sideBar/reports.svg';
import MyCollectionIcon from '../assets/sideBar/collections_bookmark.svg';
import CrystalIcon from '../assets/sideBar/crystal_commerce.svg';
import FavouriteIcon from '../assets/sideBar/favourite.svg';
import LocatorIcon from '../assets/sideBar/locator.svg';
import RecentlyIcon from '../assets/sideBar/recently.svg';
import ExchangeIcon from '../assets/sideBar/x.svg';
import PersonUserAvatar from '../assets/sideBar/person_user_avatar.svg';
import StoreIcon from '../assets/sideBar/store.svg';
import BlogIcon from '../assets/sideBar/rss_feed.svg';
import HelpCenterIcon from '../assets/sideBar/live_help.svg';
import SystemStatusIcon from '../assets/sideBar/dvr.svg';
import CatalogsIcon from '../assets/sideBar/create_new_folder.svg';
import IdeasPortaIcon from '../assets/sideBar/lightbulb-idea.svg';
import FacebookGroupIcon from '../assets/sideBar/social-facebook.svg';
import TwitterIcon from '../assets/sideBar/social-twitter.svg';
import YouTubeIcon from '../assets/sideBar/social-youtube.svg';
import InstagramIcon from '../assets/sideBar/social-instagram.svg';
import LinkedInIcon from '../assets/sideBar/linkedin.svg';
import OrderIcon from '../assets/sideBar/list_alt.svg';
import StoreCreditsIcon from '../assets/sideBar/monetization_on.svg';
import PointsIcons from '../assets/sideBar/stars.svg';
import WishlistsIcon from '../assets/sideBar/loyalty.svg';
import AddUserIcon from '../assets/sideBar/person_add.svg';
import BillingIcon from '../assets/sideBar/account_balance.svg';
import AddressIcon from '../assets/sideBar/settings.svg';
import TemplatesIcon from '../assets/sideBar/templates.svg';
import SitePagesIcon from '../assets/sideBar/web.svg';
import SocialIcon from '../assets/sideBar/social-media.svg';
import ViewWebsiteIcon from '../assets/sideBar/eye.svg';
import SiteBuilderIcon from '../assets/sideBar/view-quilt.svg';

export const TABS = [
  { label: 'Home', value: 'home', heading: 'Global Tools' },
  { label: 'Admin', value: 'admin', heading: 'Business Tools' }
  // { label: 'Shop', value: 'shop', heading: 'Collector Cache' }
];

export const LOCATION_FORM_TABS = [
  { label: 'GENERAL', value: 'general', heading: '' },
  { label: 'ADDRESS', value: 'address', heading: '' },
  { label: 'HOURS', value: 'hours', heading: '' }
];

export const TAB_ITEMS = {
  home: [
    { id: 1, icon: MyCollectionIcon, name: 'My Collection', link: '', subMenu: [] },
    {
      id: 2,
      icon: MyWebsiteIcon,
      name: 'My Website',
      link: '',
      subMenu: [
        { id: 1, icon: TemplatesIcon, name: 'Templates', link: '', subMenu: [] },
        { id: 2, icon: SitePagesIcon, name: 'Site Pages', link: '', subMenu: [] },
        { id: 3, icon: AddressIcon, name: 'Site Settings', link: '', subMenu: [] },
        { id: 4, icon: SocialIcon, name: 'Social Media', link: '', subMenu: [] },
        { id: 5, icon: ViewWebsiteIcon, name: 'View Website', link: '', subMenu: [] },
        { id: 6, icon: SiteBuilderIcon, name: 'Site Builder', link: '', subMenu: [] }
      ]
    },
    {
      id: 3,
      icon: PersonUserAvatar,
      name: 'My Account',
      subMenu: [
        { id: 1, icon: OrderIcon, name: 'My Orders', link: '', subMenu: [] },
        { id: 2, icon: StoreCreditsIcon, name: 'Store Credits', link: '', subMenu: [] },
        { id: 3, icon: PointsIcons, name: 'Points', link: '', subMenu: [] },
        { id: 4, icon: WishlistsIcon, name: 'Wishlists', link: '', subMenu: [] },
        { id: 5, icon: AddUserIcon, name: 'Users', link: '', subMenu: [] },
        { id: 6, icon: BillingIcon, name: 'Billing', link: '', subMenu: [] },
        { id: 7, icon: AddressIcon, name: 'Account Settings', link: '', subMenu: [] }
      ]
    },
    {
      id: 4,
      icon: CrystalIcon,
      name: 'CrystalCommerce',
      subMenu: [
        {
          id: 1,
          icon: StoreIcon,
          name: 'Store',
          link: 'https://explore.crystalcommerce.com/store',
          subMenu: []
        },
        {
          id: 2,
          icon: BlogIcon,
          name: 'Blog',
          link: 'https://www.crystalcommerce.com/blog/',
          subMenu: []
        },
        {
          id: 3,
          icon: IdeasPortaIcon,
          name: 'Ideas Portal',
          link: 'https://cc2legacyux.ideas.aha.io/',
          subMenu: []
        },
        {
          id: 4,
          icon: CatalogsIcon,
          name: 'Catalogs request',
          link: 'https://www.crystalcommerce.com/catalog-update-request',
          subMenu: []
        },
        {
          id: 5,
          icon: CrystalIcon,
          name: 'Social Media',
          subMenu: [
            {
              id: 1,
              icon: FacebookGroupIcon,
              name: 'Facebook Group',
              link: 'https://www.facebook.com/groups/crystalcommerceusers',
              subMenu: []
            },
            {
              id: 2,
              icon: FacebookGroupIcon,
              name: 'Facebook Page',
              link: 'https://www.facebook.com/CrystalCommerce',
              subMenu: []
            },
            {
              id: 3,
              icon: TwitterIcon,
              name: 'Twitter',
              link: 'https://twitter.com/crystalcommerce',
              subMenu: []
            },
            {
              id: 4,
              icon: YouTubeIcon,
              name: 'YouTube',
              link: 'https://www.youtube.com/@CrystalCommerceInc',
              subMenu: []
            },
            {
              id: 5,
              icon: InstagramIcon,
              name: 'Instagram',
              link: 'https://www.instagram.com/crystalcommerce',
              subMenu: []
            },
            {
              id: 6,
              icon: LinkedInIcon,
              name: 'LinkedIn',
              link: 'https://www.linkedin.com/company/crystal-commerce',
              subMenu: []
            }
          ]
        },
        {
          id: 6,
          icon: SystemStatusIcon,
          name: 'System Status',
          link: 'http://status.crystalcommerce.com',
          subMenu: []
        },
        {
          id: 7,
          icon: HelpCenterIcon,
          name: 'HelpCenter',
          link: 'http://help.crystalcommerce.com',
          subMenu: []
        }
      ]
    }
  ],
  admin: [
    { id: 1, icon: DashboardIcon, name: 'Dashboard', link: '', subMenu: [] },
    { id: 2, icon: OrdersIcon, name: 'Orders', link: '', subMenu: [] },
    { id: 3, icon: InventoryIcon, name: 'Inventory', link: '', subMenu: [] },
    { id: 4, icon: RestockIcon, name: 'Restock', link: '', subMenu: [] },
    { id: 5, icon: ChannelsIcon, name: 'Channels', link: '', subMenu: [] },
    { id: 6, icon: MarketingIcon, name: 'Marketing', link: '', subMenu: [] },
    { id: 7, icon: CustomersIcon, name: 'Customers', link: '', subMenu: [] },
    { id: 8, icon: MyWebsiteIcon, name: 'My Website', link: '', subMenu: [] },
    { id: 9, icon: ReportsIcon, name: 'Reports', link: '', subMenu: [] }
  ],
  shop: [
    { id: 1, icon: ExchangeIcon, name: 'Exchange Network', link: '', subMenu: [] },
    { id: 2, icon: LocatorIcon, name: 'Store Locator', link: '', subMenu: [] },
    { id: 3, icon: FavouriteIcon, name: 'Favourite Stores', link: '', subMenu: [] },
    { id: 4, icon: RecentlyIcon, name: 'Recently viewed', link: '', subMenu: [] }
  ]
};

const {
  REACT_APP_SINEWAVE_API_HOSTNAME,
  REACT_APP_SINEWAVE_SIGNUP_AUTH,
  REACT_APP_SINEWAVE_SIGNIN_AUTH,
  REACT_APP_SINEWAVE_SIGNOUT_AUTH,
  REACT_APP_REDIRECT_URL,
  REACT_APP_APPLICATION_ID,
  REACT_APP_RESPONSE_TYPE
} = process.env;

export const sineWaveSignupPath = `${REACT_APP_SINEWAVE_API_HOSTNAME}${REACT_APP_SINEWAVE_SIGNUP_AUTH}`;
export const sineWaveSigninPath = `${REACT_APP_SINEWAVE_API_HOSTNAME}${REACT_APP_SINEWAVE_SIGNIN_AUTH}?
redirect_uri=${REACT_APP_REDIRECT_URL}&client_id=${REACT_APP_APPLICATION_ID}&scopes=${[
  'public'
]}&response_type=${REACT_APP_RESPONSE_TYPE}`;
export const sineWaveSignoutPath = `${REACT_APP_SINEWAVE_API_HOSTNAME}${REACT_APP_SINEWAVE_SIGNOUT_AUTH}`;

export const INIT = 'init';
export const SUCCESS = 'success';
export const ERROR = 'error';
export const LOADING = 'loading';
