export default undefined;

type SuccessProps = {
  msg: string;
  code: number;
};

type ErrorProps = {
  error: string;
};


// PLAIN TS ----------------------
function getMessage(p: SuccessProps | ErrorProps) {
    if ("error" in p) {
    return p.error.toLowerCase();
  }

  return p.msg.toUpperCase();
}

getMessage({
  code: 123,
  msg: "Hallo",
  error: "xxx"
} )


type Success = {
  msg: string;
  code: number;
  error?: undefined;
};

type Error = {
  error: string;
  
};


function isError(candidate: Success|Error): candidate is Error {
  return ("error" in candidate);
}

function getMessageStrict(p: Success|Error) {
    if ( isError(p) ) {
    return p.error.toLowerCase();
  }

  return p.msg.toUpperCase();
}

getMessageStrict({
  error: "xxx",
})

getMessageStrict({
  msg: "fasdfsdf",
  code: 123
})

getMessageStrict({
  msg: "fasdfsdf",
  code: 123,
  error: "312"
})

