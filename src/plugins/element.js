import Vue from 'vue'
import {
  Pagination,
  Dialog,
  Drawer,
  Autocomplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  // MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  // CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  // ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  // TimeSelect,
  TimePicker,
  Popover,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Tree,
  Alert,
  // Slider,
  // Icon,
  Row,
  Col,
  Upload,
  Progress,
  // Spinner,
  Badge,
  Card,
  Rate,
  Steps,
  Step,
  Carousel,
  CarouselItem,
  Collapse,
  CollapseItem,
  Cascader,
  ColorPicker,
  Transfer,
  // Container,
  // Header,
  // Aside,
  // Main,
  // Footer,
  Timeline,
  TimelineItem,
  Link,
  Divider,
  Image,
  // Calendar,
  // Backtop,
  // PageHeader,
  // CascaderPanel,
  Loading,
  Scrollbar,
  MessageBox,
  Message,
  Notification
} from 'element-ui'

Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Drawer)
Vue.use(Autocomplete)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
// Vue.use(MenuItemGroup)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Checkbox)
// Vue.use(CheckboxButton)
Vue.use(CheckboxGroup)
Vue.use(Switch)
Vue.use(Select)
Vue.use(Option)
Vue.use(OptionGroup)
Vue.use(Button)
// Vue.use(ButtonGroup)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(DatePicker)
// Vue.use(TimeSelect)
Vue.use(TimePicker)
Vue.use(Popover)
Vue.use(Tooltip)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Tag)
Vue.use(Tree)
Vue.use(Alert)
// Vue.use(Slider)
// Vue.use(Icon)
Vue.use(Row)
Vue.use(Col)
Vue.use(Upload)
Vue.use(Progress)
// Vue.use(Spinner)
Vue.use(Badge)
Vue.use(Card)
Vue.use(Rate)
Vue.use(Steps)
Vue.use(Step)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Cascader)
Vue.use(ColorPicker)
Vue.use(Transfer)
// Vue.use(Container)
// Vue.use(Header)
// Vue.use(Aside)
// Vue.use(Main)
// Vue.use(Footer)
Vue.use(Timeline)
Vue.use(TimelineItem)
Vue.use(Link)
Vue.use(Divider)
Vue.use(Image)
// Vue.use(Calendar)
// Vue.use(Backtop)
// Vue.use(PageHeader)
// Vue.use(CascaderPanel)
Vue.use(Scrollbar)
Vue.use(Loading.directive)

Vue.prototype.$msgbox = MessageBox
// 规避报错，应该是单例导致的
Vue.prototype.$alert = Vue.prototype.$msgbox.alert
Vue.prototype.$confirm = Vue.prototype.$msgbox.confirm
Vue.prototype.$prompt = Vue.prototype.$msgbox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message

if (process.env.NODE_ENV !== 'production') {
  console.log(
    '%c如果elementUI组件报错，可能是组件还没引入导致的，可以在/src/plugins中将相应组件的注释去掉。%c没有使用的elementUI组件请不要将注释打开',
    'color:#fff;background:#c00;padding:2px 6px;border-radius:4px 0 0 4px;',
    'color:#fff;background:#41b883;padding:2px 5px;border-radius:0 4px 4px 0;'
  )
}
