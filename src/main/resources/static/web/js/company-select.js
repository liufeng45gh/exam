cities = new Object();
cities['请选择']=new Array('请选择');
cities['总部机关']=new Array('请选择','办公室（党委办公室、公共关系部）', '战略发展部', '规划计划部', '财务资产部', '人力资源部（党委组织部）',
                    '资本运营部（董监事办公室）', '法律事务部', '市场营销部（客户服务部）', '资源采购部', '生产运行部', '液化石油气部', 'LNG部', '工程管理部', '物资管理部',
                     '质量安全环保部', '科技信息部', '监察部（纪委办公室、党委巡察办公室）', '审计部', '企业管理部', '国际合作部', '党群工作部（党委宣传部、企业文化部）', '董事会秘书处');

cities['天然气省公司']=new Array('请选择','天然气黑龙江分公司', '天然气吉林分公司', '天然气辽宁分公司', '天然气北京分公司', '天然气天津分公司',
                    '天然气河北分公司', '天然气山西分公司', '天然气内蒙古分公司', '天然气山东分公司', '天然气河南分公司', '天然气安徽分公司', '天然气江苏分公司', '天然气浙江分公司', '天然气上海分公司',
                     '天然气陕西分公司', '天然气甘肃分公司', '天然气宁夏分公司', '天然气新疆分公司', '天然气青海分公司', '天然气四川分公司', '天然气重庆分公司', '天然气云南公司', '天然气贵州分公司', '天然气广西分公司', '天然气湖北分公司', '天然气湖南分公司', '天然气江西分公司', '天然气广东分公司', '天然气海南分公司');


cities['派出机构']=new Array('请选择','北方分公司', '东部分公司', '西部分公司', '南方分公司');

cities['液化石油气公司']=new Array('请选择','液化石油气东北分公司', '液化石油气华北分公司', '液化石油气西北分公司', '液化石油气西南分公司', '液化石油气华南分公司');

cities['液化天然气单位']=new Array('请选择','大连LNG公司', '京唐LNG公司', '江苏LNG公司', '深圳LNG项目部', '福建项目部');

cities['其他单位']=new Array('请选择','昆仑气电公司', '能源控股公司', '天然气克拉玛依公司', '昆仑利用处置工作组', '昆仑燃气技术研究院','茂名项目部', '揭阳项目部', '雄安项目部', '浙江项目工作组', '烟台项目工作组', '盐城项目工作组', '盘锦项目工作组', '哈尔滨中庆公司', '甘肃燃气公司', '新疆博瑞公司');



function setCompany(){
    var pv = $("#company").val();
    if(typeof(cities[pv])=='undefined') return;
    $("#department").prop("length",0);
    var city = $("#department").get(0);
     for(i=0; i<cities[pv].length; i++)
    {
       ii = i;
       city.options[ii] = new Option();
       city.options[ii].text = cities[pv][i];
       city.options[ii].value = cities[pv][i];
    }


}