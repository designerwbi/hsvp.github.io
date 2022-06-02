import TraineePrintForm from './TraineePrintForm'

import { forwardRef, useRef } from "react";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";
const ComponentToPrint = forwardRef((props, ref) => {


    
    return <div ref={ref}>

<TraineePrintForm />



    </div>;
  });