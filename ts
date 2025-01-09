showHeader=true;
constructor(private router:Router)
{
router.events.subscribe(
(var)=>{
if(val instanceof NavigationEnd){
if(var.url=='/login')}
this.showHeader=false
}
else{
this.showHeader=true
}
