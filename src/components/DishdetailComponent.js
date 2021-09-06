import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';





        function RenderComments({dishComments}){
         const cmnts = dishComments.map((dComments) => {
                 return(
                   <li key={dComments.id}> 
                   <p>{dComments.comment}</p>
                   <li>
                    <p>--{dComments.author}</p> 
                    <p>{new Intl.DateTimeFormat('en-US',{
                            year:'numeric',
                            month:'long',
                            day:'2-digit'
                    }).format(new Date(dComments.date))}</p>
                    </li>
                </li>     
                 );
         } );
         if (dishComments != null){
                 return(
                         
                        <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <ul className="list-unstyled">
                                {cmnts}
                        </ul>
                        </div>
                 );
         }
         else{
                 return(
                         <div></div>
                 );
         }

        }
         function Renderdish({dish})
        {    
                        return(
                                <div className="col-12 col-md-5 m-1">  
                                <Card>
                                  <CardImg src={dish.image} alt={dish.name} />
                                 <CardBody>
                                        <CardTitle>{dish.name}</CardTitle>
                                        <CardText>{dish.description}</CardText>
                                </CardBody>
                               </Card>
                             </div>                                                             
                        );  
           
        }
        const DishDetail = (props) =>
       {  if(props.dish!=null){
               return(
                <div className="container">
                         <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                 <Renderdish dish={props.dish}/>
                 <RenderComments comments={props.comments}/>      
                   </div>   
              </div>

               );
       }
       else{
               return(<div></div>);
               
          }      
       }
     

export default DishDetail; 