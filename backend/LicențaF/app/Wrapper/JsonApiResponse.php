<?php

namespace App\Wrapper;
use Illuminate\Http\JsonResponse;
use JsonSerializable;
use Psy\Util\Json;

class JsonApiResponse implements JsonSerializable{
    protected $returnData;

    protected $statusCode;
    protected $statusText;
    protected $token;


    public function getResponse():JsonResponse{
        return new JsonResponse($this->jsonSerialize(),$this->getStatusCode());
    }

    /**
     * @return array|mixed
     */
    public function getReturnData(): mixed
    {
        return $this->returnData;
    }

    /**
     * @return int|mixed
     */
    public function getStatusCode(): mixed
    {
        return $this->statusCode;
    }

    /**
     * @return mixed
     */
    public function getStatusText()
    {
        return $this->statusText;
    }
    /**
     * @return mixed
     */
    public function getToken()
    {
        return $this->token;
    }

    /**
     * @param array|mixed $returnData
     */
    public function setReturnData(mixed $returnData): void
    {
        $this->returnData = $returnData;
    }

    /**
     * @param int|mixed $statusCode
     */
    public function setStatusCode(mixed $statusCode): void
    {
        $this->statusCode = $statusCode;
    }

    /**
     * @param mixed $statusText
     */
    public function setStatusText($statusText): void
    {
        $this->statusText = $statusText;
    }
    /**
     * @param string $token
     */
    public function setToken(string $token): void
    {
        $this->token = $token;
    }


    public function jsonSerialize(): array
    {
        return [
            'returnData' => $this->returnData,
            'statusCode' => $this->statusCode,
            'statusText'=>$this->statusText,
            'token'=> $this->token,
        ];
    }
}
